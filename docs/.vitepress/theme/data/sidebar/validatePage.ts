import { GrayMatterFile } from "gray-matter";

export default function validatePage(path: string, { data }: GrayMatterFile<string>) {
  const errors: string[] = [];

  // Homepage gets its title automatically
  if (path !== "index.md" && data.title === undefined) {
    errors.push("A page title must be defined but none was found.");
  }

  if (data.tags) {
    if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string")) {
      errors.push(`Page tags must be an array of string tag names.`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Page "${path}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
