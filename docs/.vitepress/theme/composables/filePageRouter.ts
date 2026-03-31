import { useRouter } from "vitepress";
import { onMounted } from "vue";

export default function useFilePageRouter() {
  const router = useRouter();

  onMounted(() => {
    window.addEventListener(
      "click",
      (e) => {
        if (
          e.defaultPrevented ||
          !(e.target instanceof Element) ||
          e.target.closest("button") || // temporary fix for docsearch action buttons
          e.button !== 0 ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.metaKey
        ) {
          return;
        }

        const link = e.target.closest<HTMLAnchorElement>("a");
        if (!link || link.download || link.target) return;

        const { href, origin, pathname } = new URL(link.href, link.baseURI);

        if (origin === location.origin && isFilePageLink(pathname)) {
          e.preventDefault();
          router.go(href);
        }
      },
      { capture: true }
    );
  });
}

function isFilePageLink(pathname: string) {
  return /^\/.+(\/.+)?\/files\//i.test(pathname);
}
