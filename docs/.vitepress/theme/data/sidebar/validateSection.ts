export default function validateSection(id: string, definition: any) {
  const errors: string[] = [];

  if (definition.title === undefined) {
    errors.push("A section title must be defined but none was found.");
  }

  if (errors.length > 0) {
    throw new Error(`Section "${id}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
