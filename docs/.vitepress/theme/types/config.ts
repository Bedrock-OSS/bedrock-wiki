import { DefaultTheme, LocaleConfig } from "vitepress";

export interface WikiConfig extends ThemeConfig {
  title: string;
  description: string;
  fastBuild: FastBuildOptions;
  locales?: LocaleConfig;
}

export interface ThemeConfig {
  longTitle?: string;
  url: string;
  repository: string;
  branch: string;
  examples?: ExamplesOptions;
  algolia: DefaultTheme.AlgoliaSearchOptions;
  navigation: NavigationItem[];
}

export interface ExamplesOptions {
  repository: string;
  branch: string;
}

export interface FastBuildOptions {
  excludedPages: string[];
}

export interface NavigationItem {
  text: string;
  link: string;
  activeMatch?: string;
}
