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
})

const route = useRoute()
const { page } = useData()
const { toggle, isVisible } = useSidebarState()

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
	() => routeData.value.frontmatter.mentions ?? []
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
