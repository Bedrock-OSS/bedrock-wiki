<template>
	<component
		:is="link ? `a` : `button`"
		class="btn"
		:class="classes"
		:href="link"
	>
		<component
			v-if="icon"
			class="btn-icon"
			:class="[iconColor]"
			:is="icon"
		/>
		<div>
			<slot />
		</div>
		<component
			v-if="iconRight"
			class="btn-icon"
			:class="[iconColor]"
			:is="iconRight"
		/>
	</component>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
	color?: '' | 'green' | 'blue' | 'red'
	link?: string
	text?: boolean
	// Expecting Vue Components
	icon?: Component
	iconRight?: Component
	iconColor?: string
}>()

const classes = computed(() => {
	let classes = []
	if (props.color) classes.push(props.color)
	if (props.text) classes.push('text')
	return classes
})
</script>

<style scoped>
.btn {
	font-family: inherit;
	font-size: inherit;
	font-weight: 500;
	line-height: 1.5;
	@apply px-3 py-1 mx-1 my-2 bg-white rounded-md !no-underline !shadow-md !hover:shadow-sm !focus:shadow-sm !active:shadow-none border !cursor-pointer border-box;
	@apply text-true-gray-500 hover:text-true-gray-600 focus:text-true-gray-600 active:text-true-gray-800;
	@apply !inline-flex justify-center items-center;
	@apply transition-colors;
}

.btn.text {
	@apply !bg-transparent border-none !shadow-none !hover:shadow-none !hover:bg-light-50 !hover:bg-opacity-5 !hover:shadow-md;
}

button.btn {
	@apply align-bottom;
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

.yellow {
	@apply text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 active:text-yellow-800;
}

.default {
	@apply text-dark-500 hover:text-dark-600 focus:text-dark-600 active:text-dark-800;
}

.dark .default {
	@apply text-light-500 hover:text-light-600 focus:text-light-600 active:text-light-800;
}

.btn-icon {
	fill: currentColor !important;
}

.btn-icon:first-child {
	@apply mr-2;
}

.btn-icon:last-child {
	@apply ml-2;
}
</style>
