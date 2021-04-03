<template>
	<div class="panel-container">
		<p :class="`panel ${type}`">
			<slot />
		</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'

const props = defineProps<{
	type: 'info' | 'warning' | 'error' | 'notice'
}>()
const type = toRef(props, 'type')
</script>

<style scoped>
.panel-container {
	padding: 10px 5px 10px 5px;
}

.panel {
	-moz-border-radius: 6px;
	-webkit-border-radius: 6px;
	background-size: 32px, 32px;
	background-position: 5px 15px;
	background-repeat: no-repeat;
	border-radius: 6px;
	overflow: hidden;
	padding: 13px 20px 15px 50px;
	min-height: 80px;
}

.info {
	background-color: #e8f7ff; /* Needs to use theme color variable */
	background-image: url(/assets/images/icons/info.png);
	border: solid 1px #5bccee; /* Needs to use theme color variable */
}

.warning {
	background-color: #fffbe8; /* Needs to use theme color variable */
	background-image: url(/assets/images/icons/warning.png);
	border: solid 1px #ee7d5b; /* Needs to use theme color variable */
}

.error {
	background-color: #ffe1e1; /* Needs to use theme color variable */
	background-image: url(/assets/images/icons/error.png);
	border: solid 1px #ee5b5b; /* Needs to use theme color variable */
}

.notice {
	background-color: #f8e8ff; /* Needs to use theme color variable */
	background-image: url(/assets/images/icons/notice.png);
	border: solid 1px #ee5bd5; /* Needs to use theme color variable */
}
</style>
