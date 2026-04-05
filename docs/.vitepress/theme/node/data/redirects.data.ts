import { existsSync, readFileSync } from "fs";
import { defineLoader } from "vitepress";
import { load } from "js-yaml";
import { join } from "path";

import config from "./config";

declare const data: Record<string, string>;
export { data };

const redirectsFilePath = join(config.srcDir, "redirects.yaml");

export default defineLoader({
  watch: redirectsFilePath,
  load() {
    if (!existsSync(redirectsFilePath)) return {};
    return load(readFileSync(redirectsFilePath, "utf-8"));
  },
});
