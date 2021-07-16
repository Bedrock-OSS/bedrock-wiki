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
		<h1 v-if="page.title != ''" id="top">{{ page.title }}</h1>
		<TOC v-if="showToc" />
		<Content
			:class="{
				'xl:pr-72': showToc,
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
import { computed } from 'vue'
const route = useRoute()
import TOC from './Content/TOC.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'
import Contributors from './Content/Contributors.vue'
const { toggle, isVisible } = useSidebarState()
import { usePageData, useRoute } from 'vitepress'
const page = usePageData()

// Default toc to true
const showToc = computed(() =>
	route.data.frontmatter.show_toc == null
		? true
		: !!route.data.frontmatter.show_toc
)

const showContributors = computed(() =>
	route.data.frontmatter.show_contributors == null
		? true
		: !!route.data.frontmatter.show_contributors
)

const mentionedContributors = computed(() =>
	route.data.frontmatter.mention == null
		? []
		: route.data.frontmatter.mention
)
</script>

<style scoped>
details summary::-webkit-details-marker {
	display: none;
}
</style>
