import { useMediaQuery, useStorage, useToggle } from '@vueuse/core'
import { computed, watchEffect } from 'vue'

export const themeId = useStorage<'system' | 'dark' | 'light'>(
	'docTheme',
	'system'
)
const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')
export const currentTheme = computed(() => {
	console.log('UPDATE')
	if (themeId.value === 'system')
		return preferredColorScheme.value ? 'dark' : 'light'
	return themeId.value
})

// Update the theme
watchEffect(() => {
	console.log('UPDATE')
	if (currentTheme.value === 'dark') document.body.classList.add('dark')
	else if (currentTheme.value === 'light')
		document.body.classList.remove('dark')
})
