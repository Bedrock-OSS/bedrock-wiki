import { PluginSimple } from "markdown-it";
import { readFileSync } from "fs";
import { join } from "path";

import {
  examplesCacheDirectory,
  getExampleRootForPage,
  getExampleFromRoot,
  renderExampleFile,
} from "../../examples";
import filePageLink from "../../../shared/filePageLink";

const exampleFilePattern =
  /^<ExampleFile\s+path="(?<path>[^"]*)"(\s*snippet="(?<snippet>[^"]*)")?\s*\/>$/;

export const exampleFilePlugin: PluginSimple = (md) => {
  md.core.ruler.after("block", "example_file", ({ env, tokens, inlineMode }) => {
    if (inlineMode) return;

    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!token.type.startsWith("html_")) continue;

      const match = token.content.trim().match(exampleFilePattern);
      if (!match) continue;

      const props = match.groups!;

      const rootPath = getExampleRootForPage(env.relativePath);
      const example = getExampleFromRoot(rootPath);

      if (!example.files.includes(props.path)) {
        throw new Error(`Example file "${props.path}" does not exist.`);
      }

      const cacheFilePath = join(examplesCacheDirectory, example.id, props.path);

      const buffer = readFileSync(cacheFilePath);
      const link = filePageLink(rootPath, props.path);

      const markdown = renderExampleFile(props.path, buffer, link, props.snippet);
      const newTokens = md.parse(markdown, env);

      // Replace the original HTML token
      tokens.splice(tokenIndex, 1, ...newTokens);
      tokenIndex += newTokens.length - 1;
    }
  });
};
