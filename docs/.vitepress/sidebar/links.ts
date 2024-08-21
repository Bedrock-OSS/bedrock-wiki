import { readdirSync, readFileSync, statSync } from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { basename, join, relative } from "path";

import { Sidebar, SidebarSection } from "../theme";
import tags from "../tags";
import sort from "./sort";

import { docsDirectory } from ".";

function formatLink(path: string) {
  return "/" + path.split(/\\|\//g).join("/").replace(".md", "");
}

export function resolveLinks(context: Sidebar | SidebarSection, dir: string = docsDirectory) {
  const isInSection = "categories" in context;
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const joinedPath = join(dir, entry);
    const stats = statSync(joinedPath);

    // Handle the normal files
    if (stats.isFile()) {
      // Don't include non-markdown files, or the section index page
      if (!entry.endsWith(".md") || (isInSection && basename(entry) === "index.md")) continue;

      const path = relative(docsDirectory, joinedPath);
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

export default function validatePage(path: string, { data }: GrayMatterFile<string>) {
  const errors: string[] = [];

  // Homepage gets its title automatically
  if (path !== "index.md" && data.title === undefined) {
    errors.push("A page title must be defined but none was found.");
  }

  if (data.tags) {
    if (Array.isArray(data.tags)) {
      for (const name of data.tags) {
        if (name in tags) continue;
        errors.push(`Tag with name "${name}" does not exist.`);
      }
    } else {
      errors.push(`Page tags must be an array of string tag names.`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Page "${path}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
