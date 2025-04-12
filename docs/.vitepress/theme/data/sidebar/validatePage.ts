import { GrayMatterFile } from "gray-matter";
import config from "../config";

const { tags } = config.userConfig.themeConfig;

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
