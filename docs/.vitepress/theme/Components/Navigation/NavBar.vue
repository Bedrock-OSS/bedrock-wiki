<template>
	<header
		class="nav-bar flex items-center justify-items-center sticky z-50 top-0 p-4 bg-true-gray-50 border-b-1 border-true-gray-200 dark:border-true-gray-600 dark:bg-true-gray-900 select-none"
	>
		<component
			:is="isVisible ? MenuOpenIcon : MenuIcon"
			class="mr-3 cursor-pointer"
			@click.prevent="toggle"
		/>
		<a :href="site.base">Bedrock Wiki</a>
		<span class="flex-grow"></span>
		<DarkMode />
		<NavLink v-for="item in navLinks" :item="item" :key="item.link" />
	</header>
</template>

<script setup lang="ts">
import MenuIcon from '../Icons/MenuIcon.vue'
import MenuOpenIcon from '../Icons/MenuOpenIcon.vue'
import NavLink from './NavLink.vue'
import DarkMode from '../Controls/DarkMode.vue'
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import { useSidebarState } from '../../Composables/sidebar'

const { toggle, isVisible } = useSidebarState()
const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.nav)
</script>

<style scoped>
header {
	height: 57px;
}
</style>
