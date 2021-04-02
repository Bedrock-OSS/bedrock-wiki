<template>
	<a class="px-2" :href="link">
		{{ props.item.text }}
	</a>
</template>

<script setup lang="ts">
import { useSiteDataByRoute } from 'vitepress'
import { computed, defineProps } from 'vue'

const props = defineProps<{
	item: {
		text: string
		link: string
	}
}>()

const link = computed(() =>
	props.item.link.startsWith('https://')
		? props.item.link
		: `${useSiteDataByRoute().value.base}${props.item.link.slice(1)}`
)
</script>
