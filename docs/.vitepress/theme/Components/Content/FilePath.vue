<template>
	<div class="tile flex mt-8 p-4">
		<FileIcon class="mr-2" /> <span class="opacity-50"><slot /></span>
	</div>
</template>

<script setup lang="ts">
import FileIcon from '../Icons/FileIcon.vue'
</script>
