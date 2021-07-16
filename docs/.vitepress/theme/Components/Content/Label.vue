<template>
	<p
		:class="{
			...cssClasses,
			'rounded-lg mb-2 mt-4 py-1 px-2 inline-block uppercase': true,
		}"
	>
		<slot />
	</p>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { useBadgeColor } from '../../Composables/useBadgeColor'

const props = defineProps<{
	color: 'red' | 'yellow' | 'green'
}>()
const { color } = toRefs(props)

const cssClasses = useBadgeColor(color)
</script>
