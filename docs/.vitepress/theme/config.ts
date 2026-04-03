import { defineConfigWithTheme } from "vitepress";

import { copyExampleArchives, getExampleForPage } from "./examples";
import { ThemeConfig, WikiConfig } from "./types";
import head, { transformHead } from "./head";
import languages from "./markdown/languages";
import plugins from "./markdown/plugins";

const isFastBuild = process.env.FAST_BUILD?.trim() === "true";

export function defineWikiConfig(config: WikiConfig) {
  const {
    title,
    longTitle = title,
    description,
    url,
    repository,
    branch,
    examples,
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
      branch,

      examples,

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

    transformPageData(pageData) {
      if (pageData.frontmatter.__tables) {
        pageData.params ??= {};
        pageData.params.tables = pageData.frontmatter.__tables;

        delete pageData.frontmatter.__tables;
      }

      if (pageData.frontmatter.example) {
        const example = getExampleForPage(pageData.relativePath);

        pageData.params ??= {};
        pageData.params.example = example;
      }
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
