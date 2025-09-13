import { bundledLanguages, createHighlighter } from "shiki";
import { PluginSimple } from "markdown-it";
import languages from "../languages";

const themes = {
  dark: "dark-plus",
  light: "light-plus",
};

const highlighter = await createHighlighter({
  themes: Object.values(themes),
  langs: [...Object.keys(bundledLanguages), languages],
});

export const inlineHighlightPlugin: PluginSimple = (md) => {
  md.renderer.rules.code_inline = (tokens, idx) => {
    const token = tokens[idx];
    const lang = token.attrGet("lang") ?? "txt";

    const highlighted = highlighter.codeToHtml(token.content, {
      lang,
      themes,
      structure: "inline",
      defaultColor: false,
    });

    return `<code class="shiki">${highlighted}</code>`;
  };
};
