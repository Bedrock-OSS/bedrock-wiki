import { HeadConfig, TransformContext } from "vitepress";

export function transformHead({ pageData, siteConfig }: TransformContext) {
  const config = siteConfig.site;
  const site = config.title;

  const { frontmatter, relativePath } = pageData;

  const title = frontmatter.title ?? config.themeConfig.longTitle;
  const description = frontmatter.description ?? config.description;

  const image = `${config.themeConfig.url}/assets/images/icons/logo.png`;

  const path = relativePath.replace(".md", "");

  let url = config.themeConfig.url;
  if (path !== "index") url += `/${path}`;

  const data: Record<string, string> = {
    // Open Graph (used by Discord)
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "og:site_name": site,
    // Twitter
    "twitter:card": "summary",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site": site,
  };

  if (frontmatter.hidden) data.robots = "noindex";

  const out: HeadConfig[] = [];

  Object.entries(data).forEach(([name, content]) => {
    out.push([
      "meta",
      {
        name,
        content,
      },
    ]);
  });

  return out;
}
