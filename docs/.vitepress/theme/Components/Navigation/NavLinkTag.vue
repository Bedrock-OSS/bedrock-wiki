<template>
	<span
		v-if="valid"
		:class="`${colour} label`"
	>{{ title }}</span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	tag: string
}>()

let valid = true
let title = ''
let colour = ''

switch (props.tag) {
case 'guide': {
	title = 'GUIDE'
	colour = 'green'
	break
}
case 'outdated': {
	title = 'OUTDATED'
	colour = 'red'
	break
}
case 'info': {
	title = 'INFO'
	colour = 'green'
	break
}
case 'system': {
	title = 'SYSTEM'
	colour = 'blue'
	break
}
case 'help': {
	title = 'HELP'
	colour = 'blue'
	break
}
default:
	valid = false
	break
}
</script>
