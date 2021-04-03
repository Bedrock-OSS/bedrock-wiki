import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isVisible = ref(true)
export function useSidebarState() {
	return {
		isVisible,
		toggle: useToggle(isVisible),
	}
}
