<template>
	<div v-if="contributors && contributors.length > 0">
		<h1>Contributors</h1>

		<div class="ml-4">
			<a
				v-for="c in contributors"
				:key="c.login"
				:href="c.html_url"
				:alt="c.login"
				target="_blank"
			>
				<img
					:src="c.avatar_url"
					class="h-8 rounded-full -ml-2"
					:alt="c.login"
					:title="c.login"
				/>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePageData, useSiteDataByRoute } from 'vitepress'
import { ref, watch } from 'vue'
import { universalFetch } from '../../Utils/fetch'

const page = usePageData()
const site = useSiteDataByRoute()

const getContributors = async function () {
	let url =
		'https://api.github.com/repos/' +
		site.value.themeConfig.repo +
		'/commits?path=' +
		site.value.themeConfig.docsDir +
		'/' +
		page.value.relativePath
	const result = await universalFetch(url, {
		headers: new Headers(
			import.meta.env.GITHUB_TOKEN
				? {
						Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
				  }
				: {}
		),
	})
	let commits = await result.json()
	let contributors = []
	for (let i = 0; i < commits.length; i++) {
		if (
			commits[i].author &&
			commits[i].author.login &&
			contributors.filter(
				(value) => value.login === commits[i].author.login
			).length === 0
		) {
			contributors.push(commits[i].author)
		}
	}
	return contributors
}

let contributors = ref(await getContributors())
watch(page, async () => {
	contributors.value = await getContributors()
})
</script>
