import { ref, onMounted } from "vue";

const isVisible = ref(true);
export default function useSidebarVisibility() {
  onMounted(() => {
    const query = window.matchMedia("(max-width: 900px)");
    isVisible.value = !query.matches;
  });

  return isVisible;
}
