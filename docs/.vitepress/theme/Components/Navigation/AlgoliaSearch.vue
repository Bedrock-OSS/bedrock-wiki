<template>
	<div class="algolia-search-box" id="docsearch" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vitepress'
import { defineProps, getCurrentInstance, onMounted, watch } from 'vue'
import type { DefaultTheme } from 'vitepress/dist/client/theme-default/config'
import type { DocSearchHit } from '@docsearch/react/dist/esm/types'
import { useSiteDataByRoute } from 'vitepress'

// @ts-ignore
import docsearch from '@docsearch/js'
import '@docsearch/css'

const siteData = useSiteDataByRoute()

const props = defineProps<{
	options: DefaultTheme.AlgoliaSearchOptions
	multilang?: boolean
}>()

const vm = getCurrentInstance()
const route = useRoute()
const router = useRouter()

watch(
	() => props.options,
	(value) => {
		update(value)
	}
)

onMounted(() => {
	initialize(props.options)
})

function isSpecialClick(event: MouseEvent) {
	return (
		event.button === 1 ||
		event.altKey ||
		event.ctrlKey ||
		event.metaKey ||
		event.shiftKey
	)
}

function getRelativePath(absoluteUrl: string) {
	const { pathname, hash } = new URL(absoluteUrl)

	return pathname + hash
}

function update(options: any) {
	if (vm && vm.vnode.el) {
		vm.vnode.el.innerHTML =
			'<div class="algolia-search-box" id="docsearch"></div>'
		initialize(options)
	}
}

function initialize(userOptions: any) {
	// if the user has multiple locales, the search results should be filtered
	// based on the language
	const facetFilters = props.multilang
		? ['language:' + siteData.value.lang]
		: []

	docsearch(
		Object.assign({}, userOptions, {
			container: '#docsearch',

			navigator: {
				navigate: ({ suggestionUrl }: { suggestionUrl: string }) => {
					const { pathname: hitPathname } = new URL(
						window.location.origin + suggestionUrl
					)
					// Router doesn't handle same-page navigation so we use the native
					// browser location API for anchor navigation
					if (route.path === hitPathname) {
						window.location.assign(
							window.location.origin + suggestionUrl
						)
					} else {
						router.go(suggestionUrl)
					}
				},
			},
			transformItems: (items: DocSearchHit[]) => {
				return items.map((item) => {
					return Object.assign({}, item, {
						url: getRelativePath(item.url),
					})
				})
			},
			hitComponent: ({
				hit,
				children,
			}: {
				hit: DocSearchHit
				children: any
			}) => {
				const relativeHit = hit.url.startsWith('http')
					? getRelativePath(hit.url as string)
					: hit.url
				return {
					type: 'a',
					ref: undefined,
					constructor: undefined,
					key: undefined,
					props: {
						href: hit.url,
						onClick: (event: MouseEvent) => {
							if (isSpecialClick(event)) {
								return
							}
							// we rely on the native link scrolling when user is already on
							// the right anchor because Router doesn't support duplicated
							// history entries
							if (route.path === relativeHit) {
								return
							}
							// if the hits goes to another page, we prevent the native link
							// behavior to leverage the Router loading feature
							if (route.path !== relativeHit) {
								event.preventDefault()
							}
							router.go(relativeHit)
						},
						children,
					},
				}
			},
		})
	)
}
</script>

<style>
.algolia-search-box {
	padding-top: 1px;
}
@media (min-width: 720px) {
	.algolia-search-box {
		padding-left: 8px;
	}
}
@media (min-width: 751px) {
	.algolia-search-box {
		min-width: 176.3px; /* avoid layout shift */
	}
	.algolia-search-box .DocSearch-Button-Placeholder {
		padding-left: 8px;
		font-size: 0.9rem;
		font-weight: 500;
	}
}

.DocSearch {
	--docsearch-primary-color: rgb(84, 104, 255);
	--docsearch-text-color: rgb(28, 30, 33);
	--docsearch-spacing: 12px;
	--docsearch-icon-stroke-width: 1.4;
	--docsearch-highlight-color: var(--docsearch-primary-color);
	--docsearch-muted-color: rgb(150, 159, 175);
	--docsearch-container-background: rgba(101, 108, 133, 0.8);
	--docsearch-logo-color: rgba(84, 104, 255);

	/* modal */
	--docsearch-modal-width: 560px;
	--docsearch-modal-height: 600px;
	--docsearch-modal-background: rgb(245, 246, 247);
	--docsearch-modal-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.5),
		0 3px 8px 0 rgba(85, 90, 100, 1);

	/* searchbox */
	--docsearch-searchbox-height: 56px;
	--docsearch-searchbox-background: rgb(235, 237, 240);
	--docsearch-searchbox-focus-background: #fff;
	--docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);

	/* hit */
	--docsearch-hit-height: 56px;
	--docsearch-hit-color: rgb(68, 73, 80);
	--docsearch-hit-active-color: #fff;
	--docsearch-hit-background: #fff;
	--docsearch-hit-shadow: 0 1px 3px 0 rgb(212, 217, 225);

	/* key */
	--docsearch-key-gradient: linear-gradient(
		-225deg,
		rgb(213, 219, 228) 0%,
		rgb(248, 248, 248) 100%
	);
	--docsearch-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230),
		inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);

	/* footer */
	--docsearch-footer-height: 44px;
	--docsearch-footer-background: #fff;
	--docsearch-footer-shadow: 0 -1px 0 0 rgb(224, 227, 232),
		0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}

/* Darkmode */

.dark .DocSearch {
	--docsearch-text-color: rgb(245, 246, 247);
	--docsearch-container-background: rgba(9, 10, 17, 0.8);
	--docsearch-modal-background: rgb(21, 23, 42);
	--docsearch-modal-shadow: inset 1px 1px 0 0 rgb(44, 46, 64),
		0 3px 8px 0 rgb(0, 3, 9);
	--docsearch-searchbox-background: rgb(38, 38, 38);
	--docsearch-searchbox-focus-background: #000;
	--docsearch-hit-color: rgb(190, 195, 201);
	--docsearch-hit-shadow: none;
	--docsearch-hit-background: rgb(9, 10, 17);
	--docsearch-key-gradient: linear-gradient(
		-26.5deg,
		rgb(86, 88, 114) 0%,
		rgb(49, 53, 91) 100%
	);
	--docsearch-key-shadow: inset 0 -2px 0 0 rgb(40, 45, 85),
		inset 0 0 1px 1px rgb(81, 87, 125), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
	--docsearch-footer-background: rgb(30, 33, 54);
	--docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
		0 -4px 8px 0 rgba(0, 0, 0, 0.2);
	--docsearch-logo-color: rgb(255, 255, 255);
}
</style>
