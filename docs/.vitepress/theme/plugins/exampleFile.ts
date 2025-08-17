import { existsSync, readFileSync } from "fs";
import { PluginSimple } from "markdown-it";
import { join } from "path";

import { examplesCacheDirectory, renderExampleFile, rootMapFilePath } from "../examples";

const exampleFilePattern = /^<ExampleFile\s+path="(?<path>[^"]*)"\s*\/>$/;

export const exampleFilePlugin: PluginSimple = (md) => {
  const rootMap: Record<string, string> = JSON.parse(readFileSync(rootMapFilePath, "utf-8"));

  md.core.ruler.after("block", "example_file", ({ env, tokens, md, inlineMode }) => {
    if (inlineMode) return;

    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!token.type.startsWith("html_")) continue;

      const match = token.content.trim().match(exampleFilePattern);
      if (!match) continue;

      const props = match.groups!;

      // Path that requested the example, can either be a section ("blocks") or a page ("blocks/blocks-intro")
      let rootPath: string = env.relativePath.replace(/\.md$/, "");
      if (!rootMap[rootPath]) rootPath = rootPath.substring(0, rootPath.indexOf("/"));

      // Name of the "examples/resources" subfolder to use
      const exampleId = rootMap[rootPath];

      if (!exampleId) {
        throw new Error(`No example files are available for page "${env.relativePath}".`);
      }

      const cacheFilePath = join(examplesCacheDirectory, exampleId, props.path);

      if (!existsSync(cacheFilePath)) {
        throw new Error(`Example file "${props.path}" does not exist.`);
      }

      const buffer = readFileSync(cacheFilePath);
      const link = `/${rootPath}/files/${props.path}.html`;

      const markdown = renderExampleFile(props.path, buffer, link);
      const newTokens = md.parse(markdown, env);

      // Replace the original HTML token
      tokens.splice(tokenIndex, 1, ...newTokens);
      tokenIndex += newTokens.length - 1;
    }
  });
};
