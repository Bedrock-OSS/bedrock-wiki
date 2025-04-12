import { readdirSync, readFileSync, statSync } from "fs";
import { basename, join, relative } from "path";
import matter from "gray-matter";

import { Sidebar, SidebarSection } from "../../types";
import config from "../config";

import validatePage from "./validatePage";
import sort from "./sort";

function formatLink(path: string) {
  return "/" + path.split(/\\|\//g).join("/").replace(".md", "");
}

export default function resolveLinks(
  context: Sidebar | SidebarSection,
  dir: string = config.srcDir
) {
  const isInSection = "categories" in context;
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const joinedPath = join(dir, entry);
    const stats = statSync(joinedPath);

    // Handle the normal files
    if (stats.isFile()) {
      // Don't include non-markdown files, or the section index page
      if (!entry.endsWith(".md") || (isInSection && basename(entry) === "index.md")) continue;

      const path = relative(config.srcDir, joinedPath);
      const link = formatLink(path);

      const pageMarkdown = readFileSync(joinedPath, "utf-8");
      const frontMatter = matter(pageMarkdown);

      validatePage(path, frontMatter);

      const { hidden, category, prefix, tags } = frontMatter.data;

      // Don't include hidden pages
      if (hidden === true) continue;

      let links = context.links;

      if (isInSection && category !== undefined) {
        const foundCategory = context.categories.find(({ title }) => title === category);

        if (foundCategory) links = foundCategory.links;
        else {
          const availableCategories = context.categories.map(({ title }) => title).join(", ");

          throw new TypeError(
            `Page "${link}" is in a non-existent category: "${category}".\n` +
              `Available categories are listed in the section's "index.md" file, which currently includes: ${availableCategories}`
          );
        }
      }

      links.push({
        prefix,
        title: frontMatter.data.title,
        link,
        tags,
        data: frontMatter.data,
      });

      sort(links);
    }
  }
}
