import { Ref } from "vue";
import { PageParams, ThemeConfig } from "../../types";
import { useData as useVPData, VitePressData } from "vitepress";

interface WikiData extends VitePressData<ThemeConfig> {
  params: Ref<PageParams>;
}

export default function useData(): WikiData {
  return useVPData() as WikiData;
}
