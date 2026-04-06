import { defineConfigWithTheme } from "vitepress";

import { ThemeConfig, WikiConfig } from "../types";

import { head, transformHead, transformPageData } from "./page";
import { markdownConfig as markdown } from "./markdown";
import { copyExampleArchives } from "./examples";

const isFastBuild = process.env.FAST_BUILD === "true";

export function defineWikiConfig(config: WikiConfig) {
  const { title, description, fastBuild, locales, ...themeConfig } = config;

  const srcExclude = ["public/*"];

  if (fastBuild && isFastBuild) {
    console.log(
      "[FAST_BUILD] Excluding the following large pages from this build:",
      fastBuild.excludedPages,
      "\n"
    );

    srcExclude.push(...fastBuild.excludedPages.map((path) => path.substring(1) + ".md"));
  }

  themeConfig.algolia.placeholder ??= `Search ${title}…`;

  return defineConfigWithTheme<ThemeConfig>({
    title,
    description,
    themeConfig,
    locales,
    markdown,

    head,
    transformHead,
    transformPageData,

    srcExclude,
    ignoreDeadLinks: isFastBuild ? fastBuild.excludedPages : undefined,

    cleanUrls: true,
    sitemap: {
      hostname: config.url,
    },

    async buildEnd({ outDir }) {
      await copyExampleArchives(outDir);
    },

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern",
          },
        },
      },
    },
  });
}
