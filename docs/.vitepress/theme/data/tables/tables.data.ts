import { join, relative, sep } from "path";
import { defineLoader } from "vitepress";
import { readFileSync } from "fs";

import { Table } from "../../types";
import config from "../config";

import parseTable from "./parseTable";

export interface Tables {
  [path: string]: Table;
}

declare const data: Tables;
export { data };

export default defineLoader({
  watch: join(config.srcDir, "public/assets/tables/**/*.json"),
  load(watchedFiles: string[]) {
    const data = {};

    for (const path of watchedFiles) {
      const table = JSON.parse(readFileSync(path, "utf-8"));
      const relativePath = relative(config.srcDir, path).replaceAll(sep, "/");

      data[relativePath] = parseTable(table);
    }

    return data;
  },
});
