<template>
	<header
		class="
			nav-bar
			flex
			items-center
			justify-items-center
			sticky
			z-50
			top-0
			p-4
			bg-true-gray-50
			border-b-1 border-true-gray-200
			dark:border-true-gray-600
			dark:bg-true-gray-900
			select-none
		"
	>
		<component
			:is="isVisible ? MenuOpenIcon : MenuIcon"
			class="mr-3 cursor-pointer"
			@pointerdown.prevent="toggle"
		/>

		<a :href="site.base" class="flex flex-row justify-between items-center">
			<WikiLogo class="mr-2" /> 
			<div class="pb-0.5"><span class="hidden sm:inline">Bedrock </span><span>Wiki</span></div>
		</a>
		<span class="flex-grow"></span>
		<DarkMode />
		<AlgoliaSearchBox v-if="!!algoliaConfig" :options="algoliaConfig" />
	</header>
</template>

<script setup lang="ts">
import MenuIcon from '../Icons/MenuIcon.vue'
import MenuOpenIcon from '../Icons/MenuOpenIcon.vue'
import NavLink from './NavLink.vue'
import DarkMode from '../Controls/DarkMode.vue'
import WikiLogo from '../Content/WikiLogo.vue'
import { computed, defineAsyncComponent } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import { useSidebarState } from '../../Composables/sidebar'
import { useIsMobile } from '../../Composables/isMobile'

const AlgoliaSearchBox = defineAsyncComponent(
	() => import('./AlgoliaSearch.vue')
)

const { toggle, isVisible } = useSidebarState()
const site = useSiteDataByRoute()
const algoliaConfig = computed(() => site.value.themeConfig.algolia)

const { isMobile } = useIsMobile()
</script>

<style scoped>
header {
	height: 57px;
}
</style>
