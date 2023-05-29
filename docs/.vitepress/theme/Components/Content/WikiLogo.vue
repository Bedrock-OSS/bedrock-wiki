<template>
	<img
		src="/favicon.ico"
		alt="Bedrock Wiki Logo"
		:style="{ height: `${props.size || 30}px` }"
	>
</template>

<script setup lang="ts">

const props =
	defineProps<{
		size?: number
	}>()
</script>
