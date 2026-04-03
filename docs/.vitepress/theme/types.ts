import { DefaultTheme } from "vitepress";

export interface WikiConfig {
  url: string;
  repository: string;
  branch: string;
  examples?: ExamplesOptions;
  algolia: DefaultTheme.AlgoliaSearchOptions;
  navigation: NavigationItem[];
  redirects: Redirects;
  tags: Tags;
  title: string;
  longTitle?: string;
  description: string;
  fastBuild: {
    excludedPages: string[];
  };
}

export interface ThemeConfig {
  longTitle: string;
  url: string;
  repository: string;
  branch: string;
  examples?: ExamplesOptions;
  algolia: DefaultTheme.AlgoliaSearchOptions;
  navigation: NavigationItem[];
  redirects: Redirects;
  tags: Tags;
}

export interface ExamplesOptions {
  repository: string;
  branch: string;
}

export type AccentColor = "red" | "orange" | "yellow" | "green" | "blue" | "purple";

export interface NavigationItem {
  text: string;
  link: string;
  activeMatch?: string;
}

export interface Example {
  id: string;
  files: string[];
  archive: {
    root: string;
    type: string;
  };
}

export interface License {
  title: string;
  link: string;
}

export interface PageParams {
  example?: Example;
  tables?: Record<string, Table>;
  [param: string]: any;
}

export interface FilePageParams extends PageParams {
  example: Example;
  /** Route path of the file page. */
  file: string;
  /** Name of the file. */
  name: string;
  /** Path of the file. */
  path: string;
  /** Source path of the file in the examples repository. */
  sourcePath: string;
  root: {
    title: string;
    path: string;
    type: "section" | "page";
  };
}

export interface Sidebar {
  links: SidebarLink[];
  sections: SidebarSection[];
}

export interface SidebarSection {
  id: string;
  title: string;
  data: Record<string, any>;
  links: SidebarLink[];
  categories: SidebarCategory[];
}

export interface SidebarCategory {
  title: string;
  color: AccentColor;
  links: SidebarLink[];
}

export interface SidebarLink {
  prefix?: string;
  title: string;
  link: string;
  tags?: string[];
  data: Record<string, any>;
}

export interface Tag {
  color: AccentColor;
  text?: string;
  sidebar?: boolean | { text: string };
}

export type Tags = Record<string, Tag>;

export type Redirects = Record<string, string>;

export interface Table {
  columns: {
    [id: string]: TableColumn;
  };
  rows: TableRow[];
}

export interface TableColumn {
  name: string;
  default?: TableValue;
  sortable?: boolean;
  textAlign?: "left" | "center" | "right";
}

export interface TableRow {
  [column: string]: TableValue;
}

export type TableValue = undefined | boolean | number | string | string[];
