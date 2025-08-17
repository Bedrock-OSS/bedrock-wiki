import { computed } from "vue";

import { FilePageParams } from "../examples";
import useData from "./data";

export default function useFilePage() {
  const { params } = useData();

  return computed(() => (params.value?.file ? (params.value as FilePageParams) : undefined));
}
