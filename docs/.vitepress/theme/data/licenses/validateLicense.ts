import { GrayMatterFile } from "gray-matter";

export default function validateLicense(id: string, { data }: GrayMatterFile<string>) {
  const errors: string[] = [];

  if (data.title === undefined) {
    errors.push("A license title must be defined but none was found.");
  }
  if (data.source === undefined) {
    errors.push("A license source link must be defined but none was found.");
  }

  if (errors.length > 0) {
    throw new Error(`License "${id}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
