<template>
	<aside
		class="sidebar float-left fixed mt-14 pb-14 pt-1 z-10 top-0 h-screen w-72 border-r-1 border-gray-200 dark:border-true-gray-600 select-none overflow-auto transform transition md:transition-none transition-transform duration-150 ease-in-out"
		:class="{
			'-translate-x-full': !isVisible,
			'translate-x-0': isVisible,
		}"
	>
		<Navigation :items="navLinks" />
	</aside>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import { useSidebarState } from '../../Composables/sidebar'

const { isVisible } = useSidebarState()
const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.sidebar['/'])
</script>
