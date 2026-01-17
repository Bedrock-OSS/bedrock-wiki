import { onBeforeMount } from "vue";
import { useRouter } from "vitepress";
import useData from "./data";

export default function useRedirect() {
  const { theme } = useData();

  const router = useRouter();

  function redirect() {
    let from = router.route.path.replace(".html", "");
    let to = theme.value.redirects[from];

    // Support redirects for specific sections of pages
    if (to === undefined) {
      from += window.location.hash;
      to = theme.value.redirects[from];
    }

    if (to) router.go(to);
  }

  onBeforeMount(redirect);
  router.onAfterRouteChange = redirect;
}
