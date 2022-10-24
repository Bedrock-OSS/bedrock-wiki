<template>
	<div class="sidebar-toc xl:fixed flex flex-col top-0 right-0 my-4">
		<details
			open
			class="
				outline-none
				w-full
				sm:min-w-sm sm:w-max
				xl:min-w-0 xl:w-auto
			"
		>
			<summary
				class="
					flex
					justify-between
					align-center
					px-4
					py-3
					bg-gray-200
					dark:bg-true-gray-600
					xl:hidden
					rounded-md rounded-bl-none
					text-lg
					outline-none
					select-none
				"
			>
				<span>Table of Contents</span>

				<ChevronLeftIcon class="my-auto transition-transform" />
			</summary>
			<div
				class="
					p-4
					xl:pb-6
					border-l-4
					xl:pt-6
					z-10
					xl:w-72 xl:border-r-1 xl:my-0 xl:mt-14
					border-gray
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
						break-all
					"
					>{{ title }}</a
				>
				<div>
					<ol id="toc" class="pl-0">
						<li
							v-for="header in headers"
							key="header.title"
							class="py-0.5"
						>
							<a
								class="
									text-black
									dark:text-white
									no-underline
									font-bold
									break-all
								"
								:href="'#' + header.slug"
								>{{ header.title }}</a
							>
							<ol v-if="maxTocLevel > 1" class="pl-2">
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
											break-all
										"
										:href="'#' + child.slug"
										>{{ child.title }}</a
									>
									<ol v-if="maxTocLevel > 2" class="pl-2">
										<li
											v-for="grandchild in child.children"
											key="grandchild.title"
											class="py-0.5"
										>
											<a
												class="
													text-black
													dark:text-white
													no-underline
													italic
													break-all
												"
												:href="'#' + grandchild.slug"
												>{{ grandchild.title }}</a
											>
										</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
				</div>
			</div>
		</details>
	</div>
</template>

<script setup lang="ts">
import { Header, useData, useRoute } from 'vitepress'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
import { ref, watch } from 'vue'

const { page } = useData()

interface extHeader extends Header {
	children: extHeader[]
}

const getHeaders = () => {
	let grouped: extHeader[] = [];
	// create curHeader as default level 1 header
	// if there is one level 1 header, this header will be overwritten
	let curHeader: extHeader = {
		level: 1,
		slug: '',
		title: '',
		children: [],
	};

	// do only if page has headers, else simply return empty list
	if (page.value.headers) {
		page.value.headers.forEach((header, index) => {
			// level 1 -> push previous curHeader and overwrite with new one
			if (header.level === 1) {
				grouped.push({...curHeader});

				curHeader = {...header, children: []};
			}
			// level 2 -> push to previous curHeader
			else if (header.level === 2) {
				curHeader.children.push({...header, children: []})
			}
			// level 3 -> push to last child of curHeader
			else if (header.level === 3) {
				if(curHeader.children.length < 1) {
					// create header at level 2 to push the new header
					curHeader.children.push({
						level: 2,
						slug: '',
						title: '',
						children: []
					});
				}

				// push header to last children of curHeader
				curHeader.children[curHeader.children.length - 1].children.push({...header, children: []})
			}
		})

		// push curHeader for the possibility, that the last header was not at level 1
		grouped.push(curHeader)
	}

	return grouped;
}

let headers = ref(getHeaders())
let title = ref(page.value.title)
let maxTocLevel = ref(page.value.frontmatter.max_toc_level ?? 3)
watch(page, () => {
	headers.value = getHeaders()
	title.value = page.value.title
	maxTocLevel.value = page.value.frontmatter.max_toc_level ?? 3
})
</script>

<style scoped>
li {
	padding: 0px;
}
ol,
ul {
	padding-top: 0;
	list-style-type: none;
}

@screen xl {
	.sidebar-toc {
		z-index: 10;
		/* Scroll if needed */
		max-height: calc(100vh - 6.9rem);
		overflow-y: auto;
	}
}

details summary {
	list-style: none;
}

details summary::-webkit-details-marker {
	display: none;
}

details[open] summary svg {
	transform: rotate(-90deg);
}
</style>
