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
					border-gray-200
					dark:border-true-gray-600
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
								class="text-black dark:text-white no-underline font-bold break-all"
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
import {useData, useRoute} from 'vitepress'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
const { page } = useData()

import { ref, watch } from 'vue'

const getHeaders = function () {
	let grouped = []
	let lastHeader = null
  let lastSubHeader = null
  if (page.value.headers) {
		for (const header of page.value.headers) {
			if (header.level === 1) {
				lastHeader = header
				header.children = []
				grouped.push(header)
			} else if (header.level === 2) {
			  lastSubHeader = header;
			  header.children = [];
			  if (!lastHeader) {
          lastHeader = {
            slug: '',
            title: '',
            children: []
          }
          grouped.push(lastHeader);
        }
        lastHeader.children.push(header)
			} else if (header.level === 3) {
        if (!lastHeader) {
          lastHeader = {
            slug: '',
            title: '',
            children: []
          }
          grouped.push(lastHeader);
        }
        if (!lastSubHeader) {
          lastSubHeader = {
            slug: '',
            title: '',
            children: []
          }
          lastHeader.children.push(lastSubHeader);
        }
        lastSubHeader.children.push(header)
      }
		}
	}
  console.log(grouped);
  return grouped
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
		max-height: calc(100vh - 4.5rem);
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
