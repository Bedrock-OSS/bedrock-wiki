import { onBeforeMount } from "vue";
import { useRouter } from "vitepress";

import { data as redirects } from "../data/redirects.data";

export default function useRedirect() {
  const router = useRouter();

  function redirect() {
    let from = router.route.path.replace(".html", "");
    let to = redirects[from];

    // Support redirects for specific sections of pages
    if (to === undefined) {
      from += window.location.hash;
      to = redirects[from];
    }

    if (to) router.go(to);
  }

  onBeforeMount(redirect);
  router.onAfterRouteChange = redirect;
}
