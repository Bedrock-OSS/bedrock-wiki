import { AccentColor } from "./misc";

export interface Sidebar {
  links: SidebarLink[];
  sections: SidebarSection[];
}

export interface SidebarSection {
  id: string;
  title: string;
  order?: number;
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
  order?: number;
  link: string;
  tags?: string[];
}
