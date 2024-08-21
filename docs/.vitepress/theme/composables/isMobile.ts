import { useMediaQuery } from "@vueuse/core";

export default function useIsMobile() {
  return useMediaQuery("(max-width: 900px)");
}
