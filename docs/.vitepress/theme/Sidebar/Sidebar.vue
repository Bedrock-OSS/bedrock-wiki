<template>
	<div class="flex-none w-72">
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
