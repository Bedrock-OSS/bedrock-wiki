import { useStorage } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { useMediaQuery } from './mediaQuery'

export type TThemeOptions = 'system' | 'dark' | 'light'
export function useTheme() {
	const storedThemeId = useStorage<TThemeOptions>('docTheme', 'system')
	const themeId = ref<TThemeOptions>(storedThemeId.value)

	watchEffect(() => {
		storedThemeId.value = themeId.value
	})

	const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

	const currentTheme = computed(() => {
		if (themeId.value === 'system')
			return isPreferredDark.value ? 'dark' : 'light'
		return themeId.value
	})

	// Update the theme
	watchEffect(() => {
		if (import.meta.env.SSR) return

		const el = document.querySelector('html')

		if (currentTheme.value === 'dark') {
			el?.classList.remove('light')
			el?.classList.add('dark')
		} else if (currentTheme.value === 'light') {
			el?.classList.remove('dark')
			el?.classList.add('light')
		}
	})

	return {
		themeId,
		currentTheme,
	}
}
