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

		if (currentTheme.value === 'dark')
			document.querySelector('html')?.classList.add('dark')
		else if (currentTheme.value === 'light')
			document.querySelector('html')?.classList.remove('dark')
	})

	return {
		themeId,
		currentTheme,
	}
}
