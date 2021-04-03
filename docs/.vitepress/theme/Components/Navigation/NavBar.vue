<template>
	<header
		class="flex sticky z-50 top-0 p-4 bg-gray-50 border-b-1 border-gray-200 dark:border-black dark:bg-gray-800"
	>
		<a :href="site.base">Bedrock Wiki</a>
		<span class="flex-grow"></span>
		<DarkMode />
		<NavLink v-for="item in navLinks" :item="item" :key="item.link" />
	</header>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import DarkMode from '../Controls/DarkMode.vue'
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.nav)
</script>
