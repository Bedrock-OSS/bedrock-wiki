import { existsSync, readFileSync } from "fs";
import { defineLoader } from "vitepress";
import { load } from "js-yaml";
import { join } from "path";

import { Tag } from "../types";
import config from "./config";

declare const data: Record<string, Tag>;
export { data };

const tagsFilePath = join(config.srcDir, "tags.yaml");

export default defineLoader({
  watch: tagsFilePath,
  load() {
    if (!existsSync(tagsFilePath)) return {};
    return load(readFileSync(tagsFilePath, "utf-8"));
  },
});
