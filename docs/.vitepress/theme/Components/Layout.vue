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
		<h1 class="xl:pr-72" v-if="page && page.title" id="top">
			{{ page.title }}
		</h1>
		<TOC v-if="showToc" />
		<Content
			:class="{
				'xl:mr-72': showToc,
			}"
		/>
		<div v-if="showContributors">
			<h2>Contributors</h2>
			<Suspense>
				<template #default>
					<Contributors :mentioned="mentionedContributors" />
				</template>
				<template #fallback>
					<div>
						<span> Loading contributors... </span>
					</div>
				</template>
			</Suspense>
		</div>
	</main>
</template>

<script setup lang="ts">
import {
	computed,
	reactive,
	watchEffect,
	onMounted,
	defineAsyncComponent,
} from 'vue'
import TOC from './Content/TOC.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'
import { useData, useRoute } from 'vitepress'

const Contributors = defineAsyncComponent(
	() => import('./Content/Contributors.vue')
)

const route = useRoute()
const { page } = useData()
const { toggle, isVisible } = useSidebarState()

const routeData = computed(() => {
	if (route?.data) return route?.data

	// Hack for error from navLinks when visiting 404 page
	// We are manually populating the route.data object with data that fits to the 404 page
	// @ts-ignore
	route.data = {
		frontmatter: {
			title: '404',
			relativePath: '/404.md',
			show_contributors: false,
			show_toc: false,
		},
	}
	return route.data
})

// Default toc to true
const showToc = computed(() => routeData.value.frontmatter.show_toc ?? true)

const showContributors = computed(
	() => routeData.value.frontmatter.show_contributors ?? true
)

const mentionedContributors = computed(
	() => routeData.value.frontmatter.mention ?? []
)
</script>

<style scoped>
details summary::-webkit-details-marker {
	display: none;
}
</style>
