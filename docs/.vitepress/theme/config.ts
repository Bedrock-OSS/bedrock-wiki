import { defineConfigWithTheme } from "vitepress";
import taskListsPlugin from "markdown-it-task-lists";

import { ThemeConfig, WikiConfig } from "./types";
import head, { transformHead } from "./head";
import * as shiki from "shiki";
import languages from "./languages";

// Used for inline code block syntax highlighting, this is necessary as by default the custom highlighter used does not import the built-in languages.
const inlineCodeBlockSyntaxHighlightingLanguages: shiki.LanguageRegistration[] = [];
for (const language of Object.values(shiki.bundledLanguages)) {
  const languageRegistration = (await language()).default[0];
  /**
   * Allow for using the custom JSON language definition from {@link languages}.
   */
  if (languageRegistration.name === "json") {
    continue;
  }
  inlineCodeBlockSyntaxHighlightingLanguages.push(languageRegistration);
}
inlineCodeBlockSyntaxHighlightingLanguages.push(...languages);
const lightTheme = (await shiki.bundledThemes["light-plus"]()).default;
const darkTheme = (await shiki.bundledThemes["dark-plus"]()).default;
const highlighter = shiki.createHighlighterCoreSync({
  engine: shiki.createJavaScriptRegexEngine(),
  themes: [lightTheme, darkTheme],
  langs: inlineCodeBlockSyntaxHighlightingLanguages,
});

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
    ignoreDeadLinks: isFastBuild,

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
        md.use(taskListsPlugin, { label: true });

        // 8Crafter's inline code block syntax highlighting plugin.
        md.renderer.rules.code_inline = (tokens, idx) => {
          const code = tokens[idx].content;
          const highlighted = highlighter.codeToHtml(code, {
            lang: tokens[idx].attrGet("lang") ?? "",
            themes: { light: lightTheme, dark: darkTheme },
            structure: "inline",
            defaultColor: false,
          });
          return `${
            (tokens[idx].attrGet("noLeftCodeBlock") ?? "false") === "true"
              ? ""
              : '<code class="shiki">'
          }${highlighted}${
            (tokens[idx].attrGet("noRightCodeBlock") ?? "false") === "true" ? "" : "</code>"
          }`;
        };
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
