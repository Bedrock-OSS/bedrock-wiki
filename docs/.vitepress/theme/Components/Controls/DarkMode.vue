<template>
	<div class="relative">
		<CurrentThemeIcon
			class="
				absolute
				opacity-70
				top-2
				left-2
				pointer-events-none
				w-4.5
				h-4.5
			"
		/>
		<select
			name="theme"
			v-model="themeId"
			class="
				appearance-none
				outline-none
				select-none
				leading-4
				rounded-md
				border-1 border-gray-200
				dark:border-true-gray-600
				focus:border-blue-300
				focus:ring
				focus:ring-blue-200
				focus:ring-opacity-50
				dark:bg-dark-gray-900 dark:border-dark-gray-800
				text-sm
				py-2
				px-8
				block
			"
		>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="system">System</option>
		</select>
		<ChevronLeftIcon
			class="
				absolute
				opacity-70
				top-1
				right-1
				transform
				-rotate-90
				pointer-events-none
			"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../../Composables/theme'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
import DesktopMacIcon from '../Icons/DesktopMacIcon.vue'
import LightThemeIcon from '../Icons/LightThemeIcon.vue'
import DarkThemeIcon from '../Icons/DarkThemeIcon.vue'

const { themeId } = useTheme()

const CurrentThemeIcon = computed(() => {
	switch (themeId.value) {
		case 'system':
			return DesktopMacIcon
		case 'dark':
			return DarkThemeIcon
		case 'light':
			return LightThemeIcon
	}
})
</script>
