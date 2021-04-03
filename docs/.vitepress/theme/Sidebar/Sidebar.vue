<template>
	<div
		class="float-left fixed pt-16 top-0 min-h-screen w-72 border-r-1 border-gray-200 select-none"
	>
		<Navigation :items="navLinks" />
	</div>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import { computed, watch } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.sidebar['/'])
watch(navLinks, () => console.log(navLinks.value), { immediate: true })
</script>
