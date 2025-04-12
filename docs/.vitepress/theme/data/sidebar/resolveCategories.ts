import { SidebarSection } from "../../types";

export default function resolveCategories(section: SidebarSection) {
  if (!section.data.categories) return [];

  for (const category of section.data.categories) {
    const { title, color } = category;

    section.categories.push({
      title,
      color,
      links: [],
    });
  }
}
