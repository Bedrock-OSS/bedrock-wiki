<template>
	<div class="my-6 aspect-w-16 aspect-h-9">
		<iframe
			:src="`https://www.youtube.com/embed/${id}`"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</template>

<script setup lang="ts">

const props = defineProps<{
	id: string
}>()
</script>
