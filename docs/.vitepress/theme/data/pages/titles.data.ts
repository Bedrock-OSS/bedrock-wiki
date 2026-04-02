import { createContentLoader } from "vitepress";

declare const data: Record<string, string>;
export { data };

export default createContentLoader("**/*.md", {
  globOptions: {
    ignore: ["**/*[*.md", "docs/public/*"],
  },
  transform(data) {
    return Object.fromEntries(
      data
        .filter(({ url, frontmatter }) => !url.endsWith("/") && frontmatter.title !== undefined)
        .map(({ url, frontmatter }) => [url, frontmatter.title])
    );
  },
});
