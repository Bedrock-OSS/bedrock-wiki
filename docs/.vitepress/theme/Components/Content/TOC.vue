<template>
	<div
		class="
			sidebar-toc
			xl:fixed
			flex flex-col
			top-0
			right-0
			p-4
			xl:pb-6
			my-2
			xl:my-0
			border-l-4
			xl:mt-14 xl:pt-6
			z-10
			xl:w-72 xl:border-r-1
			border-gray-200
			dark:border-true-gray-600
			border-gray-200
		"
	>
		<a
			href="#top"
			class="
				pb-1
				pt-0
				text-black
				dark:text-white
				no-underline
				font-bold
				text-lg
			"
			>{{ title }}</a
		>
		<div class="pl-5">
			<ol id="toc">
				<li v-for="header in headers" key="header.title" class="py-0.5">
					<a
						class="text-black dark:text-white no-underline"
						:href="'#' + header.slug"
						>{{ header.title }}</a
					>
					<ol>
						<li
							v-for="child in header.children"
							key="child.title"
							class="py-0.5"
						>
							<a
								class="
									text-black
									dark:text-white
									no-underline
									italic
									ml-6
								"
								:href="'#' + child.slug"
								>{{ child.title }}</a
							>
						</li>
					</ol>
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePageData } from 'vitepress'
const page = usePageData()

import { ref, watch } from 'vue'

const getHeaders = function () {
	let grouped = []
	let lastHeader = null
	if (page.value.headers) {
		for (const header of page.value.headers) {
			if (header.level === 2) {
				lastHeader = header
				header.children = []
				grouped.push(header)
			} else if (header.level === 3) {
				if (lastHeader) {
					lastHeader.children.push(header)
				} else {
					grouped.push(header)
				}
			}
		}
	}

	return grouped
}

let headers = ref(getHeaders())
let title = ref(page.value.title)
watch(page, () => {
	headers.value = getHeaders()
	title.value = page.value.title
})
</script>

<style scoped>
@screen xl {
	.sidebar-toc {
		/* Scroll if needed */
		max-height: calc(100vh - 4.5rem);
		overflow-y: auto;
	}
}
</style>
