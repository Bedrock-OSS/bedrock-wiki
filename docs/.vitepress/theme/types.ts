import { DefaultTheme } from "vitepress";

export interface ThemeConfig {
  url: string;
  repository: string;
  algolia: DefaultTheme.AlgoliaSearchOptions;
  navigation: NavigationItem[];
  redirects: Redirects;
  sidebar: Sidebar;
  tags: Tags;
}

export type AccentColor = "red" | "orange" | "yellow" | "green" | "blue";

export interface NavigationItem {
  text: string;
  link: string;
  activeMatch?: string;
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
