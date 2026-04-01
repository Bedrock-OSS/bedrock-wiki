import { existsSync, readFileSync, writeFileSync } from "fs";
import { Sidebar } from "../../types";
import { resolve } from "path";
import config from "../config";

const templatePath = resolve(config.srcDir, "llms.txt");
const templateContentMarker = "<!-- @content -->";

const outputPath = resolve(config.srcDir, "public/llms.txt");

export default function generateLlmsFile(sidebar: Sidebar) {
  if (!existsSync(templatePath)) return; // llms.txt file will not be created if not template is provided

  const lines: string[] = [];

  // Top-level pages
  if (sidebar.links.length > 0) {
    lines.push("## General");
    for (const page of sidebar.links) {
      lines.push(`- [${page.title}](${page.link})`);
    }
    lines.push("");
  }

  // Sections
  for (const section of sidebar.sections) {
    lines.push(`## ${section.title}`);
    lines.push("");

    // Pages without a category
    for (const page of section.links) {
      lines.push(`- [${page.title}](${page.link})`);
    }

    if (section.links.length > 0) lines.push("");

    // Categorized pages
    for (const category of section.categories) {
      if (category.links.length === 0) continue;

      lines.push(`### ${category.title}`);
      lines.push("");

      for (const page of category.links) {
        lines.push(`- [${page.title}](${page.link})`);
      }

      lines.push("");
    }

    lines.push("");
  }

  const template = readFileSync(templatePath, { encoding: "utf-8" });
  const content = template
    .replace(templateContentMarker, lines.join("\n").replace(/\n{3,}/g, "\n\n"))
    .trimEnd();

  writeFileSync(outputPath, content);
}
