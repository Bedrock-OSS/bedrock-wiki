import { SidebarSection, SidebarLink } from "../../../types";

export default function sort<T extends SidebarSection[] | SidebarLink[]>(items: T) {
  return items.sort(
    (
      { order: orderA = Number.MAX_SAFE_INTEGER, title: titleA },
      { order: orderB = Number.MAX_SAFE_INTEGER, title: titleB }
    ) => {
      // Tie goes to the text compare! (Will also apply for elements without nav order)
      if (orderA === orderB) return titleA.localeCompare(titleB);

      // Return nav order
      return orderA - orderB;
    }
  ) as T;
}
