<template>
	<img
		:src="props.src"
		:alt="props.alt"
		:class="{ 'pixelated-image' : props.pixelated === 'true' }"
		:width="props.width"
	/>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

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
