<template>
	<div
		v-if="isVisible"
		class="float-left fixed mt-14 pb-14 pt-1 top-0 h-screen w-72 border-r-1 border-gray-200 dark:border-true-gray-600 select-none overflow-auto"
	>
		<Navigation :items="navLinks" />
	</div>
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
