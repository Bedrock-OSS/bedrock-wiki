<template>
	<div class="absolute inset-y-0 left-0 pl-3 flex items-center">
		<span class="leading-4">
			<Icon class="pointer-events-none w-4 h-4" />
		</span>
	</div>
	<select
		name="theme"
		v-model="themeId"
		class="
			select-none
			leading-4
			rounded
			border-gray-300
			rounded-md
			focus:border-blue-300
			focus:ring focus:ring-blue-200 focus:ring-opacity-50
			dark:bg-dark-gray-900
			dark:border-dark-gray-800
			text-sm
			py-2
			pl-8
			block
		"
	>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
		<option value="system">System</option>
	</select>
</template>

<script setup lang="ts">
import { useTheme } from '../../Composables/theme'
const { themeId } = useTheme()
</script>
