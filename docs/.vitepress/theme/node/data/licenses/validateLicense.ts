export default function validateLicense(id: string, frontmatter: Record<string, any>) {
  const errors: string[] = [];

  if (frontmatter.title === undefined) {
    errors.push("A license title must be defined but none was found.");
  }
  if (frontmatter.source === undefined) {
    errors.push("A license source link must be defined but none was found.");
  }

  if (errors.length > 0) {
    throw new Error(`License "${id}" has invalid frontmatter:\n- ${errors.join("\n- ")}\n`);
  }
}
