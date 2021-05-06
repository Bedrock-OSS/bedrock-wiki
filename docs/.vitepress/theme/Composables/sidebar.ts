import { useToggle } from '@vueuse/core'
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
export function useSidebarState() {
	onMounted(() => {
		const query = window.matchMedia('(max-width: 768px)')
		isVisible.value = !query.matches
	})

	return {
		isVisible,
		toggle: useToggle(isVisible),
	}
}
