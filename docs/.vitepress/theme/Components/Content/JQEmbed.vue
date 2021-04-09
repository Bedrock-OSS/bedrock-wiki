<template>
	<iframe
		width="100%"
		height="500"
		:src="`https://jqterm.com/${content}`"
		frameborder="0"
	/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	content: string
}>()
</script>
