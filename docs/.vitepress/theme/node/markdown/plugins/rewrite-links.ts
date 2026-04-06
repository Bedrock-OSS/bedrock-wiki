import type MarkdownIt from "markdown-it";
import type { PluginSimple } from "markdown-it";

/**
 * Check if a URL should be rewritten with /zh/ prefix
 */
function shouldRewriteUrl(url: string): boolean {
  return (
    url.startsWith("/") &&
    !url.startsWith("//") &&
    !url.startsWith("/zh/") &&
    !url.startsWith("/assets/") &&
    !url.startsWith("/public/") &&
    !url.startsWith("/~")
  );
}

/**
 * Rewrite internal links in Chinese markdown to add /zh/ prefix.
 * Only processes files in the /zh/ directory.
 * Uses core ruler to run after markdown parsing but before rendering.
 */
export const rewriteZhLinksPlugin: PluginSimple = (md: MarkdownIt) => {
  // Store the current file path from the render rule
  let currentFilePath: string | undefined;

  // Hook into the render method to capture the file path
  const originalRender = md.render.bind(md);
  md.render = (src: string, env: any = {}) => {
    currentFilePath = env?.path || env?.filePath || env?.relativePath;
    const result = originalRender(src, env);
    currentFilePath = undefined;
    return result;
  };

  md.core.ruler.after("block", "rewrite_zh_links", ({ tokens }) => {
    // Use the captured file path
    const filePath = currentFilePath;

    // Support both Unix and Windows paths
    const isZhFile =
      filePath?.includes("/zh/") ||
      filePath?.includes("\\zh\\") ||
      filePath?.startsWith("zh/") ||
      filePath?.startsWith("zh\\");

    // Skip if not a zh file
    if (!isZhFile) return;

    for (const token of tokens) {
      // Skip code blocks entirely (fence and code_block tokens)
      if (token.type === "fence" || token.type === "code_block") continue;

      // Process inline tokens (standard Markdown links)
      if (token.children) {
        for (const child of token.children) {
          if (child.type === "link_open") {
            const href = child.attrGet("href");
            if (href && shouldRewriteUrl(href)) {
              child.attrSet("href", `/zh${href}`);
            }
          }
        }
      }

      // Process HTML tokens (Vue components like <Card>, <Button>)
      if (token.type === "html_inline" || token.type === "html_block") {
        const content = token.content;

        // Handle link="..." attributes (for Card component)
        const linkAttrMatch = /link="([^"]+)"/g;
        let linkMatch;
        let newContent = content;
        while ((linkMatch = linkAttrMatch.exec(content)) !== null) {
          const url = linkMatch[1];
          if (shouldRewriteUrl(url)) {
            newContent = newContent.replace(`link="${url}"`, `link="/zh${url}"`);
          }
        }

        // Handle href="..." attributes (for Button component and regular links)
        const hrefAttrMatch = /href="([^"]+)"/g;
        let hrefMatch;
        while ((hrefMatch = hrefAttrMatch.exec(content)) !== null) {
          const url = hrefMatch[1];
          if (shouldRewriteUrl(url)) {
            newContent = newContent.replace(`href="${url}"`, `href="/zh${url}"`);
          }
        }

        if (newContent !== content) {
          token.content = newContent;
        }
      }
    }
  });
};
