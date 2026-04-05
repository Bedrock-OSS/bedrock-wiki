import { PluginSimple } from "markdown-it";
import { readFileSync } from "fs";
import { join } from "path";

import assetPath from "../../../../shared/assetPath";

import { parseTable } from "./parseTable";

const publicDir = "docs/public";
const tablePattern = /^<Table\s+data="(?<data>[^"]*)"\s*\/>$/;

export const dataDrivenTablePlugin: PluginSimple = (md) => {
  md.core.ruler.after("block", "data_driven_table", ({ env, tokens, inlineMode }) => {
    if (inlineMode) return;

    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!token.type.startsWith("html_")) continue;

      const match = token.content.trim().match(tablePattern);
      if (!match) continue;

      const props = match.groups!;

      const path = assetPath("tables", env.relativePath, props.data);

      const table = JSON.parse(readFileSync(join(publicDir, path), "utf-8"));

      env.frontmatter.__tables ??= {};
      env.frontmatter.__tables[path] = parseTable(table, md, env);
    }
  });
};
