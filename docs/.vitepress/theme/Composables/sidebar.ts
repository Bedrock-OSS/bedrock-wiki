import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

export function useSidebarState() {
	if (import.meta.env.SSR) return ref(true)

	const query = window.matchMedia('(max-width: 768px)')
	const isVisible = ref(!query.matches)

	return {
		isVisible,
		toggle: useToggle(isVisible),
	}
}
