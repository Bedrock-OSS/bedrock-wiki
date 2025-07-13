import { defineConfigWithTheme } from "vitepress";

import { ThemeConfig, WikiConfig } from "./types";
import head, { transformHead } from "./head";
import languages from "./languages";
import plugins from "./plugins";

const isFastBuild = process.env.FAST_BUILD?.trim() === "true";

export function defineWikiConfig(config: WikiConfig) {
  const {
    title,
    longTitle = title,
    description,
    url,
    repository,
    algolia,
    navigation,
    fastBuild,
    redirects,
    tags,
  } = config;

  const srcExclude = [
    "*/index.md", // Do not include section definition files
  ];

  if (fastBuild && isFastBuild) {
    console.log(
      "[FAST_BUILD] Excluding the following large pages from this build:",
      fastBuild.excludedPages,
      "\n"
    );

    srcExclude.push(...fastBuild.excludedPages.map((path) => path.substring(1) + ".md"));
  }

  return defineConfigWithTheme<ThemeConfig>({
    title,
    description,

    cleanUrls: true,

    head,
    transformHead,

    srcExclude,
    ignoreDeadLinks: isFastBuild ? fastBuild.excludedPages : undefined,

    themeConfig: {
      longTitle,

      url,
      repository,

      algolia: {
        placeholder: `Search ${title}…`,
        ...algolia,
      },

      navigation,
      redirects,
      tags,
    },

    markdown: {
      anchor: {
        level: [2, 3, 4, 5, 6],
      },
      headers: {
        level: [2, 3, 4, 5, 6],
      },
      math: true,
      languages,
      lineNumbers: true,
      theme: {
        dark: "dark-plus",
        light: "light-plus",
      },
      config(md) {
        for (const plugin of plugins) md.use(plugin);
      },
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
