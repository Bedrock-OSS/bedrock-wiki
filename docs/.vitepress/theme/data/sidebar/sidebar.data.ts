import { defineLoader } from "vitepress";
import { join } from "path";

import { Sidebar } from "../../types";
import config from "../config";

import resolveLinks from "./resolveLinks";
import resolveSections from "./resolveSections";

declare const data: Sidebar;
export { data };

export default defineLoader({
  watch: join(config.srcDir, "**/*.md"),
  load() {
    const sidebar: Sidebar = {
      links: [],
      sections: [],
    };

    resolveLinks(sidebar);
    resolveSections(sidebar);

    return sidebar;
  },
});
