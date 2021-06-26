<template>
	<NavBar />
	<Sidebar />

	<main
		:class="{
			'm-8': true,
			'md:ml-80': isVisible,
			'mt-0': true,
			'min-h-screen': true,
		}"
	>
		<h1 id="top">{{ page.title }}</h1>
		<TOC />
		<Content
			:class="{
				'toc-visible': !isReducedScreen,
			}"
		/>
		<h2>Contributors</h2>
		<Suspense>
			<template #default>
				<Contributors />
			</template>
			<template #fallback>
				<div>
					<span> Loading contributors... </span>
				</div>
			</template>
		</Suspense>
	</main>
</template>

<script setup lang="ts">
import TOC from './Content/TOC.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'
import Contributors from './Content/Contributors.vue'
const { isVisible } = useSidebarState()
import { useIsReducedScreen } from '../Composables/isReducedScreen'
const { isReducedScreen } = useIsReducedScreen()
import { usePageData } from 'vitepress'
const page = usePageData()
</script>

<style scoped>
.toc-visible {
	padding-right: 300px;
}
details summary::-webkit-details-marker {
	display: none;
}
</style>
