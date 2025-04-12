import { SidebarSection, SidebarLink } from "../../types";

export default function sort<T extends SidebarSection[] | SidebarLink[]>(items: T) {
  return items.sort(({ data: dataA, title: titleA }, { data: dataB, title: titleB }) => {
    // Default to max int, so without nav order you will show second
    const orderA = dataA.nav_order ?? Number.MAX_SAFE_INTEGER;
    const orderB = dataB.nav_order ?? Number.MAX_SAFE_INTEGER;

    // Tie goes to the text compare! (Will also apply for elements without nav order)
    if (orderA === orderB) return titleA.localeCompare(titleB);

    // Return nav order
    return orderA - orderB;
  }) as T;
}
