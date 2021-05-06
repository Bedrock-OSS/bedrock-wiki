import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isMobile = window.matchMedia('(max-width: 768px)').matches

const isVisible = ref(!isMobile)
export function useSidebarState() {
	return {
		isVisible,
		toggle: useToggle(isVisible),
	}
}
