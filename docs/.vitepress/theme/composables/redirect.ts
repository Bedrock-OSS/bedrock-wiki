import { onBeforeMount } from "vue";
import { useRouter } from "vitepress";
import useData from "./data";

export default function useRedirect() {
  const { theme } = useData();

  const router = useRouter();

  function redirect() {
    const from = router.route.path.replace(".html", "");

    const to = theme.value.redirects[from];
    if (to === undefined) return;

    router.go(to);
  }

  onBeforeMount(redirect);
  router.onAfterRouteChange = redirect;
}
