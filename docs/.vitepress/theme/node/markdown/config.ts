import { MarkdownOptions } from "vitepress";
import languages from "./languages";
import plugins from "./plugins";

const headingLevels = [2, 3, 4, 5, 6];

export const markdownConfig: MarkdownOptions = {
  anchor: {
    level: headingLevels,
  },
  headers: {
    level: headingLevels,
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
};
