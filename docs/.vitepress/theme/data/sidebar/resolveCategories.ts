import { SidebarSection } from "../../types";

export default function resolveCategories(section: SidebarSection, rawCategories: any = []) {
  for (const { title, color } of rawCategories) {
    section.categories.push({
      title,
      color,
      links: [],
    });
  }
}
