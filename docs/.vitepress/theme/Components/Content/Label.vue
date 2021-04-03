<template>
	<p :class="`label ${color}`"><slot /></p>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'

const props = defineProps<{
	color: 'red' | 'yellow' | 'green'
}>()
const type = toRef(props, 'color')
</script>

<style scoped>
.label {
	display: inline-block;
    padding: 0.55em 0.6em;
    margin: 1rem 0.5rem 0.5rem 0.5rem;
	text-transform: uppercase;
	vertical-align: middle;
	font-size: 12px !important;
	border-radius: 12px;
}

.red {
    background-color: #e94c4c;
}
.yellow {
    background-color: #f7d12e;
    color: #44434d;
}
.green {
    background-color: #009c7b;
}
</style>
