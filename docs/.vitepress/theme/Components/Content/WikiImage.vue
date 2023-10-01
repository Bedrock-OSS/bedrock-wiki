<template>
	<img
		v-if="!props.theme || currentTheme === props.theme"
		:src="props.src"
		:alt="props.alt"
		:class="{ 'pixelated-image' : props.pixelated === 'true' }"
		:width="props.width"
	>
</template>

<script setup lang="ts">
import { useTheme } from '../../Composables/theme'

const { currentTheme } = useTheme()

const props =
	defineProps<{
		src: string
		alt?: string
		pixelated?: string
		width?: string,
		theme?: string
	}>()
</script>

<style scoped>
.pixelated-image {
	image-rendering: pixelated;
}
</style>
