<template>
	<div
		class="toc-div p-4 border-l-4"
		:class="{
			'sidebar-toc': !isReducedScreen,
			'reduced-toc': isReducedScreen,
		}"
	>
		<a href="#top" class="row1">{{ title }}</a>
		<div class="pl-5">
			<ol id="toc">
				<li v-for="header in headers" key="header.title">
					<a class="row2" :href="'#' + header.slug">{{
						header.title
					}}</a>
					<ol>
						<li v-for="child in header.children" key="child.title">
							<a class="row3" :href="'#' + child.slug">{{
								child.title
							}}</a>
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
import { useIsReducedScreen } from '../../Composables/isReducedScreen'
const { isReducedScreen } = useIsReducedScreen()

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
/* General */
.sidebar-toc {
	@apply;
}
a {
	@apply text-black no-underline;
}
.dark a {
	@apply text-white no-underline;
}

/* Sidebar Vs. Main */
.sidebar-toc {
	@apply mt-14 pb-14 pt-1 z-10 top-0 w-72 border-r-1 border-gray-200 dark:border-true-gray-600 border-gray-200;
	position: fixed;
	padding-right: 20px;
	right: 0;
	top: 40;
}

/* Level-offset */

.row1 {
	font-weight: bold;
	font-size: large;
}
.row2 {
}

.row3 {
	@apply ml-6;
	font-style: italic;
}
</style>
