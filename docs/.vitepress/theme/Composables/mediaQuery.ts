import { tryOnUnmounted } from '@vueuse/shared'
import { ref } from 'vue'

export function useMediaQuery(query: string) {
	const mediaQuery = matchMedia(query)
	const matches = ref(mediaQuery.matches)

	const onChange = (mediaQuery: MediaQueryListEvent) => {
		matches.value = mediaQuery.matches
	}

	if ('addEventListener' in mediaQuery) {
		mediaQuery.addEventListener('change', onChange)
	} else {
		// @ts-ignore Support for old Safari
		mediaQuery.addListener(updateFunc)
	}

	tryOnUnmounted(() => {
		if ('addEventListener' in mediaQuery) {
			mediaQuery.removeEventListener('change', onChange)
		} else {
			// @ts-ignore Support for old Safari
			mediaQuery.removeListener(updateFunc)
		}
	})

	return matches
}
