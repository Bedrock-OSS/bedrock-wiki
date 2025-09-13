import { computed } from "vue";
import { useRoute, withBase } from "vitepress";

export default function useNavLink(item: {
  class?: string;
  link: string;
  prefix?: string;
  activeMatch?: string;
}) {
  const route = useRoute();

  const isExternal = computed(() => isExternalCheck(item.link));

  const props = computed(() => {
    const routePath = normalizePath(`/${route.data.relativePath}`);
    let active = false;

    if (item.activeMatch) {
      active = new RegExp(item.activeMatch).test(routePath);
    } else {
      const itemPath = normalizePath(item.link);
      active = itemPath === "/" ? itemPath === routePath : routePath.startsWith(itemPath);
    }

    return {
      class: {
        active,
        isExternal: isExternal.value,
      },
      href: isExternal.value ? item.link : withBase(item.link),
      target: isExternal.value ? "_blank" : undefined,
    };
  });

  return {
    props,
    isExternal,
  };
}

function normalizePath(path: string) {
  return path
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "")
    .replace(/\.(html|md)$/, "")
    .replace(/\/index$/, "/");
}

export const outboundRE = /^[a-z]+:/i;

export function isExternalCheck(path: string) {
  return outboundRE.test(path);
}
