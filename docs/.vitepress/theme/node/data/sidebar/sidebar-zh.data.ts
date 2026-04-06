import { defineLoader } from "vitepress";
import { join } from "path";
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { basename } from "path";
import { load } from "js-yaml";

import { Sidebar, SidebarSection } from "../../../types";
import config from "../config";

import validateSection from "./validateSection";
import sort from "./sort";
import resolveCategories from "./resolveCategories";
import resolveLinks from "./resolveLinks";

declare const data: Sidebar;
export { data };

function resolveZhSections(sidebar: Sidebar) {
  const zhDir = join(config.srcDir, "zh");

  if (!existsSync(zhDir)) return;

  const entries = readdirSync(zhDir);

  for (const entry of entries) {
    const joinedPath = join(zhDir, entry);
    const stats = statSync(joinedPath);
    const sectionDefinitionPath = join(joinedPath, "section.yaml");

    // Handle top level directories - these make up the expandable sections in the sidebar
    if (stats.isDirectory() && existsSync(sectionDefinitionPath)) {
      const id = basename(entry);

      const sectionDefinition: any = load(readFileSync(sectionDefinitionPath, "utf-8"));
      validateSection(id, sectionDefinition);

      const section: SidebarSection = {
        id: `zh/${id}`,
        title: sectionDefinition.title,
        order: sectionDefinition.nav_order,
        links: [],
        categories: [],
      };

      resolveCategories(section, sectionDefinition.categories);
      resolveLinks(section, joinedPath);

      sidebar.sections.push(section);
    }
  }

  sort(sidebar.sections);
}

export default defineLoader({
  watch: [join(config.srcDir, "zh/**/*.md"), join(config.srcDir, "zh/*/section.yaml")],
  load() {
    const sidebar: Sidebar = {
      links: [],
      sections: [],
    };

    resolveZhSections(sidebar);

    return sidebar;
  },
});
