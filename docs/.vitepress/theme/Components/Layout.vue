<template>
	<NavBar />
	<div>
		<Sidebar />

		<main
			class="m-8 mt-22 min-h-screen"
			:class="{
				'md:ml-80': isVisible,
			}"
		>
			<h1
				v-if="page && page.title"
				id="top"
				class="xl:pr-72"
			>
				{{ page.title }}
			</h1>
			<Label
				v-for="(tag, i) in tags"
				:key="i"
				:name="tag"
			/>
			<TOC v-if="showToc" />
			<Content
				:class="{
					'xl:mr-72': showToc,
				}"
			/>

			<div v-if="showEditLink">
				<div
					class="pt-4"
					v
				>
					<a
						:href="editLink"
						target="_blank"
					>Edit {{ page.title }} on Github.</a>
				</div>
			</div>

			<div v-if="showContributors">
				<h2
					:class="{
						'xl:mr-72': showToc,
					}"
				>
					Contributors
				</h2>
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
			<div
				class="float"
				:hidden="data.isCookiesAgreed"
			>
				<!-- Cookie policy -->
				<span>
					We use cookies to improve your experience. By continuing to
					use this site, you agree to our use of cookies. See our
					<a href="/privacy">Privacy Policy</a> for more information.
				</span>
				<Button @click="agreeCookies">
					Got it!
				</Button>
			</div>
			<footer class="mainfooter">
				<div>
					Bedrock Wiki by
					<a
						href="https://github.com/Bedrock-OSS"
						target="_blank"
						rel="noopener noreferrer"
					>Bedrock-OSS</a>.
				</div>
				<div>
					"Minecraft" is a trademark of Mojang AB. Bedrock-OSS,
					Bedrock Wiki and
					<a
						href="https://bedrock.dev"
						target="_blank"
						rel="noopener noreferrer"
					>bedrock.dev</a>
					are not affiliated in any way with Microsoft or Mojang AB.
				</div>
				<ul>
					<li>
						<a
							href="/privacy.html"
							rel="noopener noreferrer"
						>Privacy Policy</a>
					</li>
					<li>
						<a
							href="/discord.html"
							rel="noopener noreferrer"
						>Join our Discord!</a>
					</li>
					<li>
						<a
							href="https://github.com/Bedrock-OSS/bedrock-wiki"
							target="_blank"
							rel="noopener noreferrer"
						>Visit our Project Repository!</a>
					</li>
					<li>
						<a
							href="/contribute.html"
							rel="noopener norefferer"
						>
							Learn how to contribute!
						</a>
					</li>
				</ul>
			</footer>
		</main>
	</div>
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
import { Content, useData, useRoute } from 'vitepress'
import Label from './Content/Label.vue'
import Button from './Content/Button.vue'

const Contributors = defineAsyncComponent(
	() => import('./Content/Contributors.vue')
)

const data = reactive({ isCookiesAgreed: true })
onMounted(() => {
	data.isCookiesAgreed = document.cookie.includes('bedrock-cookies=true')

	// create OpenGraph data
	ogCreate()
})

const route = useRoute()
const { page } = useData()
const { toggle, isVisible } = useSidebarState()

// open graph metadata: used for link previews in eg. discord
// This method is a bit hacky, because it manually injects the metadata in the pages head.
let ogCreate = () => {
	// standard values will stay the same
	// they are defined in config.js
	// og:type, og:site_name, og:image
	let description =
		page.value.description != ''
			? page.value.description
			: 'This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.'
	let title = page.value.title != '' ? page.value.title : 'The Bedrock Wiki'
	let site = 'Bedrock Wiki'
	let image = `https://wiki.bedrock.dev/assets/images/homepage/wikilogo.png?${Date.parse(
		// @ts-ignore
		new Date()
	)}`
	let imageAlt = 'The title image of the Bedrock Wiki'
	let url =
		page.value.relativePath != ''
			? `https://wiki.bedrock.dev/${page.value.relativePath.slice(
				0,
				page.value.relativePath.lastIndexOf('.md')
			)}.html`
			: 'https://wiki.bedrock.dev'

	let order = ['twitter:card', 'twitter:site', 'twitter:url', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt','og:type', 'og:site_name', 'og:url', 'og:title', 'og:description', 'og:image', 'og:image:url', 'og:image:secure_url', 'og:image:alt', ]

	let ogTags = {
		// twitter
		'twitter:card': 'summary',
		'twitter:site': site,
		'twitter:url': url,
		'twitter:title': title,
		'twitter:description': description,
		'twitter:image': image,
		'twitter:image:alt': imageAlt,
		// og
		'og:type': 'website',
		'og:site_name': site,
		'og:url': url,
		'og:title': title,
		'og:description': description,
		'og:image': image,
		'og:image:url': image,
		'og:image:secure_url': image,
		'og:image:alt': imageAlt,
	}
	// let dogTags = [
	// 	[['twitter:card'], 'summary'],
	// 	[['og:type'], 'website'],
	// 	[
	// 		['twitter:description', 'og:description'],
	// 		page.value.description != ''
	// 			? page.value.description
	// 			: 'This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.',
	// 	],
	// 	[
	// 		['twitter:title', 'og:title'],
	// 		page.value.title != '' ? page.value.title : 'The Bedrock Wiki',
	// 	],
	// 	[
	// 		['twitter:image', 'og:image'],
	// 		// @ts-ignore
	// 		`https://wiki.bedrock.dev/assets/images/homepage/wikilogo.png?${Date.parse(
	// 			new Date()
	// 		)}`,
	// 	],
	// 	[
	// 		['twitter:image:alt', 'og:image:alt'],
	// 		'The title image of the Bedrock Wiki',
	// 	],
	// 	[
	// 		['og:url'],
	// 		page.value.relativePath != ''
	// 			? `https://wiki.bedrock.dev/${page.value.relativePath.slice(
	// 					0,
	// 					page.value.relativePath.lastIndexOf('.md')
	// 			  )}.html`
	// 			: 'https://wiki.bedrock.dev',
	// 	],
	// 	[['twitter:site', 'og:site_name'], 'Bedrock Wiki'],
	// ]
	// let ogTags = {
	// 	'og:url':
	// 		page.value.relativePath != ''
	// 			? `https://wiki.bedrock.dev/${page.value.relativePath.slice(
	// 					0,
	// 					page.value.relativePath.lastIndexOf('.md')
	// 			  )}.html`
	// 			: 'https://wiki.bedrock.dev',
	// 	'og:title':
	// 		page.value.title != '' ? page.value.title : 'The Bedrock Wiki',
	// 	'og:description':
	// 		page.value.description != ''
	// 			? page.value.description
	// 			: 'This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.',
	// }
	order.reverse().forEach(tag => {
		let meta = document.createElement('meta')
		meta.setAttribute('property', tag)
		// @ts-ignore
		meta.content = ogTags[tag]
		document.head.insertBefore(meta, document.head.children[0])
	})
	// Object.entries(ogTags).forEach(([name, content]) => {
	// 	let meta = document.createElement('meta')
	// 	meta.setAttribute('property', name)
	// 	meta.content = content
	// 	document.head.insertBefore(meta, document.head.children[0])
	// })

	// append description seperate
	let metaDescription: HTMLMetaElement = document.querySelector('[name=description]') || document.createElement('meta')
	metaDescription.name = 'description'
	metaDescription.content = description
	document.head.insertBefore(metaDescription, document.head.children[0])

	// append title seperate
	let metaTitle: HTMLMetaElement = document.querySelector('[name=title]') || document.createElement('meta')
	metaTitle.name = 'title'
	metaTitle.content = title
	document.head.insertBefore(metaTitle, document.head.children[0])

	// edit and append title-element
	let elTitle: HTMLTitleElement = document.querySelector('title') || document.createElement('title')
	elTitle.title = title
	document.head.insertBefore(elTitle, document.head.children[0])

	// ogTags.forEach((el) => {
	// 	// @ts-ignore
	// 	el[0].forEach((tag: string) => {
	// 		let meta = document.createElement('meta')
	// 		meta.setAttribute('property', tag)
	// 		// @ts-ignore
	// 		meta.content = el[1]
	// 		document.head.insertBefore(meta, document.head.children[0])
	// 	})
	// })

	// append description seperate
	// let mdeta: HTMLMetaElement =
	// 	document.querySelector('[name=description]') ||
	// 	document.createElement('meta')
	// meta.name = 'description'
	// // @ts-ignore
	// meta.content = ogTags[2][1]
	// document.head.insertBefore(meta, document.head.children[0])

	// Object.entries(ogTags).forEach(([name, content]) => {
	// 	let meta = document.createElement('meta')
	// 	meta.setAttribute('property', name)
	// 	meta.content = content
	// 	document.head.insertBefore(meta, document.head.children[1])

	// 	// append description seperate
	// 	if (name === 'og:description') {
	// 		let meta = document.createElement('meta')
	// 		meta.name = 'description'
	// 		meta.content = content
	// 		document.head.appendChild(meta)
	// 	}
	// })
}

function agreeCookies() {
	document.cookie = 'bedrock-cookies=true; max-age=31536000 ; path=/'
	data.isCookiesAgreed = true
}
const routeData = computed(() => {
	if (route?.data) return route?.data

	// Hack for error from navLinks when visiting 404 page
	// We are manually populating the route.data object with data that fits to the 404 page
	// @ts-ignore
	
	// eslint-disable-next-line vue/no-side-effects-in-computed-properties
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

const showEditLink = computed(
	() => routeData.value.frontmatter.show_edit_link ?? true
)

const mentionedContributors = computed(
	() => routeData.value.frontmatter.mention ?? []
)

const tags = computed(() => routeData.value.frontmatter.tags ?? [])

const editLink = computed(
	() =>
		'https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/' +
		routeData.value.relativePath
)
</script>

<style scoped>
details summary::-webkit-details-marker {
	display: none;
}
</style>
