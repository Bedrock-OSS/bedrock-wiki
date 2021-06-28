<template>
	<a :class="`btn ${color}`" :href="link"><slot /></a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	color: '' | 'green' | 'blue' | 'red'
	link: string
}>()
</script>

<style scoped>
.btn {
	font-family: inherit;
	font-size: inherit;
	font-weight: 500;
	line-height: 1.5;
	@apply px-6 py-1 mx-0 my-3 bg-white rounded-md !no-underline !shadow-md !hover:shadow-sm !focus:shadow-sm !active:shadow-none border !cursor-pointer align-baseline inline-block border-box;
	@apply text-true-gray-500 hover:text-true-gray-600 focus:text-true-gray-600 active:text-true-gray-800;
}

.dark .btn {
	@apply bg-true-gray-900;
}
.green {
	@apply text-green-500 hover:text-green-600 focus:text-green-600 active:text-green-800;
}
.blue {
	@apply text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-800;
}

.red {
	@apply text-red-500 hover:text-red-600 focus:text-red-600 active:text-red-800;
}
</style>
