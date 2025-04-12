import matter from "gray-matter";
import path from "path";
import fs from "fs";

import { Sidebar, SidebarSection } from "../../types";
import config from "../config";

import validateSection from "./validateSection";
import sort from "./sort";

import resolveCategories from "./resolveCategories";
import resolveLinks from "./resolveLinks";

export default function resolveSections(sidebar: Sidebar) {
  const entries = fs.readdirSync(config.srcDir);

  for (const entry of entries) {
    const joinedPath = path.join(config.srcDir, entry);
    const stats = fs.statSync(joinedPath);
    const indexPath = path.join(joinedPath, "index.md");

    // Handle top level directories - these make up the expandable sections in the sidebar
    if (stats.isDirectory() && fs.existsSync(indexPath)) {
      const id = path.basename(entry);

      const sectionIndex = fs.readFileSync(indexPath, "utf-8");
      const sectionFrontmatter = matter(sectionIndex);
      validateSection(id, sectionFrontmatter);

      const section: SidebarSection = {
        id,
        title: sectionFrontmatter.data.title,
        data: sectionFrontmatter.data,
        links: [],
        categories: [],
      };

      resolveCategories(section);
      resolveLinks(section, joinedPath);

      sidebar.sections.push(section);
    }
  }

  sort(sidebar.sections);
}
