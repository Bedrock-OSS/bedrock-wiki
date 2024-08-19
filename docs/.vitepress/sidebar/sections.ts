import matter, { GrayMatterFile } from "gray-matter";
import path from "path";
import fs from "fs";

import { Sidebar, SidebarSection } from "../theme";
import sort from "./sort";

import { resolveCategories } from "./categories";
import { resolveLinks } from "./links";
import { docsDirectory } from ".";

export function resolveSections(sidebar: Sidebar) {
  const entries = fs.readdirSync(docsDirectory);

  for (const entry of entries) {
    const joinedPath = path.join(docsDirectory, entry);
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

export default function validateSection(id: string, { data }: GrayMatterFile<string>) {
  const errors: string[] = [];

  if (data.title === undefined) {
    errors.push("A section title must be defined but none was found.");
  }

  if (errors.length > 0) {
    throw new Error(`Section "${id}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
