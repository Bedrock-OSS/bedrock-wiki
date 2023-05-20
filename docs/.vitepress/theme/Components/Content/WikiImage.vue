<template>
	<img
		:src="props.src"
		:alt="props.alt"
		:class="{ 'pixelated-image' : props.pixelated === 'true' }"
		:width="props.width"
	>
</template>

<script setup lang="ts">
const props =
	defineProps<{
		src: string
		alt?: string
		pixelated?: string
		width?: string
	}>()
</script>

<style scoped>
.pixelated-image {
	image-rendering: pixelated;
}
</style>
