import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { basename, join } from "path";
import { load } from "js-yaml";

import { Sidebar, SidebarSection } from "../../types";
import config from "../config";

import validateSection from "./validateSection";
import sort from "./sort";

import resolveCategories from "./resolveCategories";
import resolveLinks from "./resolveLinks";

export default function resolveSections(sidebar: Sidebar) {
  const entries = readdirSync(config.srcDir);

  for (const entry of entries) {
    const joinedPath = join(config.srcDir, entry);
    const stats = statSync(joinedPath);
    const sectionDefinitionPath = join(joinedPath, "section.yaml");

    // Handle top level directories - these make up the expandable sections in the sidebar
    if (stats.isDirectory() && existsSync(sectionDefinitionPath)) {
      const id = basename(entry);

      const sectionDefinition: any = load(readFileSync(sectionDefinitionPath, "utf-8"));
      validateSection(id, sectionDefinition);

      const section: SidebarSection = {
        id,
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
