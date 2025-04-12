import { GrayMatterFile } from "gray-matter";

export default function validateSection(id: string, { data }: GrayMatterFile<string>) {
  const errors: string[] = [];

  if (data.title === undefined) {
    errors.push("A section title must be defined but none was found.");
  }

  if (errors.length > 0) {
    throw new Error(`Section "${id}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
