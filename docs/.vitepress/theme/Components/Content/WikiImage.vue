<template>
	<img
		:src="props.src"
		:alt="props.alt"
		:class="{ 'pixelated-image': props.pixelated }"
	/>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props =
	defineProps<{
		src: string
		alt: string
		pixelated?: boolean
	}>()
</script>

<style scoped>
.pixelated-image {
	image-rendering: pixelated;
}
</style>
