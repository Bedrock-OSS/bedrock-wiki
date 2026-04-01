// @ts-check

/**
 * Generates docs/public/llms.txt from docs/llms_template.txt by scanning
 * the docs directory for all markdown pages and building a table of contents.
 *
 * This script mirrors the sidebar resolution logic to produce a structured
 * TOC grouped by section and category.
 *
 * Usage: node docs/.vitepress/generate-llms-txt.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

/**
 * @typedef {{
 *   title: string;
 *   link: string;
 *   navOrder: number;
 *   category?: string;
 * }} PageEntry
 *
 * @typedef {{
 *   title: string;
 *   pages: PageEntry[];
 * }} CategoryEntry
 *
 * @typedef {{
 *   title: string;
 *   id: string;
 *   navOrder: number;
 *   categories: CategoryEntry[];
 *   pages: PageEntry[];
 * }} SectionEntry
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DOCS_DIR = path.resolve(__dirname, "..");
const TEMPLATE_PATH = path.join(DOCS_DIR, "llms_template.txt");
const OUTPUT_PATH = path.join(DOCS_DIR, "public", "llms.txt");

/**
 * Placeholder string in the template file that gets replaced with the
 * auto-generated table of contents during the build.
 */
const MARKER = "@replace-table-of-content";

/**
 * Converts a file path relative to the docs directory into a URL-style link.
 * @param {string} relativePath - Path relative to the docs directory (e.g. "blocks/blocks-intro.md").
 * @returns {string} URL-style link (e.g. "/blocks/blocks-intro").
 */
function formatLink(relativePath) {
  return "/" + relativePath.split(/\\|\//g).join("/").replace(".md", "");
}

/**
 * Scans a directory for markdown pages and returns them as sorted page entries.
 * Skips hidden pages, dynamic routes (containing "["), and index files.
 * @param {string} dir - Absolute path of the directory to scan.
 * @param {string} baseDir - Absolute path of the docs root, used to compute relative links.
 * @returns {PageEntry[]} Sorted array of page entries.
 */
function resolvePages(dir, baseDir) {
  /** @type {PageEntry[]} */
  const pages = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stats = fs.statSync(fullPath);

    if (stats.isFile() && entry.endsWith(".md") && !entry.includes("[") && entry !== "index.md") {
      const content = fs.readFileSync(fullPath, "utf-8");
      const { data: frontmatter } = matter(content);

      if (frontmatter.hidden === true) continue;

      const relativePath = path.relative(baseDir, fullPath);
      pages.push({
        title: frontmatter.title || path.basename(entry, ".md"),
        link: formatLink(relativePath),
        navOrder: frontmatter.nav_order ?? Number.MAX_SAFE_INTEGER,
        category: frontmatter.category,
      });
    }
  }

  return pages.sort((a, b) => {
    if (a.navOrder === b.navOrder) return a.title.localeCompare(b.title);
    return a.navOrder - b.navOrder;
  });
}

/**
 * Discovers all section directories (those containing an index.md) inside the
 * docs root, reads their frontmatter for title/categories, resolves their pages,
 * and distributes pages into categories where applicable.
 * @param {string} docsDir - Absolute path of the docs root directory.
 * @returns {SectionEntry[]} Sorted array of section entries.
 */
function resolveSections(docsDir) {
  /** @type {SectionEntry[]} */
  const sections = [];
  const entries = fs.readdirSync(docsDir);

  for (const entry of entries) {
    const fullPath = path.join(docsDir, entry);
    const stats = fs.statSync(fullPath);
    const indexPath = path.join(fullPath, "index.md");

    if (stats.isDirectory() && fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, "utf-8");
      const { data: frontmatter } = matter(indexContent);

      /** @type {CategoryEntry[]} */
      const categories = [];
      if (frontmatter.categories) {
        for (const cat of frontmatter.categories) {
          categories.push({ title: cat.title, pages: [] });
        }
      }

      const pages = resolvePages(fullPath, docsDir);

      // Distribute pages into categories
      /** @type {PageEntry[]} */
      const uncategorized = [];
      for (const page of pages) {
        if (page.category) {
          const cat = categories.find((c) => c.title === page.category);
          if (cat) {
            cat.pages.push(page);
            continue;
          }
        }
        uncategorized.push(page);
      }

      sections.push({
        title: frontmatter.title || entry,
        id: entry,
        navOrder: frontmatter.nav_order ?? Number.MAX_SAFE_INTEGER,
        categories,
        pages: uncategorized,
      });
    }
  }

  return sections.sort((a, b) => {
    if (a.navOrder === b.navOrder) return a.title.localeCompare(b.title);
    return a.navOrder - b.navOrder;
  });
}

/**
 * Collects markdown pages that live directly in the docs root (not inside a section directory).
 * @param {string} docsDir - Absolute path of the docs root directory.
 * @returns {PageEntry[]} Sorted array of top-level page entries.
 */
function resolveTopLevelPages(docsDir) {
  /** @type {PageEntry[]} */
  const pages = [];
  const entries = fs.readdirSync(docsDir);

  for (const entry of entries) {
    const fullPath = path.join(docsDir, entry);
    const stats = fs.statSync(fullPath);

    if (stats.isFile() && entry.endsWith(".md") && !entry.includes("[") && entry !== "index.md") {
      const content = fs.readFileSync(fullPath, "utf-8");
      const { data: frontmatter } = matter(content);

      if (frontmatter.hidden === true) continue;

      pages.push({
        title: frontmatter.title || path.basename(entry, ".md"),
        link: formatLink(entry),
        navOrder: frontmatter.nav_order ?? Number.MAX_SAFE_INTEGER,
      });
    }
  }

  return pages.sort((a, b) => {
    if (a.navOrder === b.navOrder) return a.title.localeCompare(b.title);
    return a.navOrder - b.navOrder;
  });
}

/**
 * Builds the full table of contents string by combining top-level pages
 * and all section entries with their categories into a markdown-formatted list.
 * @param {string} docsDir - Absolute path of the docs root directory.
 * @returns {string} Markdown-formatted table of contents.
 */
function buildToc(docsDir) {
  /** @type {string[]} */
  const lines = [];

  // Top-level pages
  const topLevelPages = resolveTopLevelPages(docsDir);
  if (topLevelPages.length > 0) {
    lines.push("## General");
    for (const page of topLevelPages) {
      lines.push(`- [${page.title}](${page.link})`);
    }
    lines.push("");
  }

  // Sections
  const sections = resolveSections(docsDir);
  for (const section of sections) {
    lines.push(`## ${section.title}`);

    // Pages without a category
    for (const page of section.pages) {
      lines.push(`- [${page.title}](${page.link})`);
    }

    // Categorized pages
    for (const category of section.categories) {
      if (category.pages.length === 0) continue;
      lines.push(`### ${category.title}`);
      for (const page of category.pages) {
        lines.push(`- [${page.title}](${page.link})`);
      }
    }

    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

/**
 * Entry point: reads the template, generates the TOC, replaces the marker,
 * and writes the final llms.txt to the public directory.
 * @returns {void}
 */
function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Template file not found: ${TEMPLATE_PATH}`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

  if (!template.includes(MARKER)) {
    console.error(`Marker "${MARKER}" not found in template file.`);
    process.exit(1);
  }

  const toc = buildToc(DOCS_DIR);
  const output = template.replace(MARKER, toc);

  // Ensure the output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, output, "utf-8");
  console.log(`Generated llms.txt at ${OUTPUT_PATH}`);
}

main();
