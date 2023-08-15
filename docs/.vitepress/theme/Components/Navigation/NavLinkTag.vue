<template>
	<span
		v-if="valid"
		:class="`${colour} label ml-auto`"
	>{{ title }}</span>
</template>

<script setup lang="ts">
import { colorFromTag } from '../../Composables/colorFromTag'

const displayedTags = [
	'guide',
	'help',
	'info',
	'outdated',
	'scripting',
	'system'
]

const props = defineProps<{
	tag: string
}>()

let valid = displayedTags.includes(props.tag)
let title = props.tag
let colour = colorFromTag(props.tag)

if (props.tag === 'scripting') title = 'scripts'
</script>
