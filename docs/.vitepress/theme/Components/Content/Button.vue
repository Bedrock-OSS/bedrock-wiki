<template>
	<a :class="`btn ${color}`" :href="link"><slot /></a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	color: 'green' | 'blue'
	link: string
}>()
</script>

<style scoped>
.btn {
	display: inline-block;
	box-sizing: border-box;
	padding-top: 0.3em;
	padding-right: 1em;
	padding-bottom: 0.3em;
	padding-left: 1em;
	margin: 5px;
	font-family: inherit;
	font-size: inherit;
	font-weight: 500;
	line-height: 1.5;
	color: #2c84fa;
	text-decoration: none;
	vertical-align: baseline;
	cursor: pointer;
	background-color: #302d36;
	border-width: 0;
	border-radius: 4px;
	box-shadow: 0 1px 2px rgb(0 0 0 / 12%), 0 3px 10px rgb(0 0 0 / 8%);
	appearance: none;
}
.btn:focus {
	box-shadow: 0 0 0 3px rgb(0 0 255 / 25%);
}

.blue:hover {
	background-color: #1878fa;
	background-image: linear-gradient(#368afa, #1878fa);
}
.blue:focus {
	background-color: #1375f9;
	background-image: none;
	box-shadow: inset 0 2px 4px rgb(0 0 0 / 15%);
}
.green:hover {
	background-color: #0fa276;
	background-image: linear-gradient(#12be8b, #0fa276);
}
.green:focus {
	background-color: #0f9e73;
	background-image: none;
	box-shadow: inset 0 2px 4px rgb(0 0 0 / 15%);
}

.green {
	color: #fff;
	background-color: #10ac7d;
	background-image: linear-gradient(#13cc95, #10ac7d);
	box-shadow: 0 1px 3px rgb(0 0 0 / 25%), 0 4px 10px rgb(0 0 0 / 12%);
}
.blue {
	color: #fff;
	background-color: #227efa;
	background-image: linear-gradient(#4593fb, #227efa);
	box-shadow: 0 1px 3px rgb(0 0 0 / 25%), 0 4px 10px rgb(0 0 0 / 12%);
}
</style>
