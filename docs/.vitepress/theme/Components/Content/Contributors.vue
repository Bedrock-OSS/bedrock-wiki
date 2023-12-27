<template>
	<div
		v-if="contributors && contributors.length > 0"
		class="inline-block"
	>
		<div class="space-x-2 md:-space-x-2 md:hover:space-x-2">
			<a
				v-for="c in contributors"
				:key="c.login"
				:href="c.html_url"
				:alt="c.login"
				target="_blank"
				class="h-8 w-8 transition-spacing ease-in-out duration-150"
			>
				<img
					:src="c.avatar_url"
					class="
						h-8
						w-8
						rounded-full
						border-2 border-white
						dark:border-true-gray-600
						bg-white
						dark:bg-true-gray-900
					"
					:alt="c.login"
					:title="c.login"
				>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, watch } from 'vue'
import { getGitHubAuthor, GitHubAuthor } from '../../Utils/user-cache'

const { page } = useData()

const props = defineProps<{
	mentioned: Array<string>
}>()

// if (import.meta.env.MODE == 'development')
// 	console.log('DEV MODE: Using getContributorsLegacy')

const getContributors = async function () {
	const ret: GitHubAuthor[] = []
	// const path = site.value.themeConfig.docsDir + '/' + page.value.relativePath
	// const contrs = site.value.themeConfig.contributors
	// if (import.meta.env.MODE == 'development')
	// 	return await getContributorsLegacy()
	// if (!contrs || !JSON.stringify(contrs).includes('SirLich')) {
	// 	console.error('couldn\'t fetch contributors:', contrs)
	// 	return await getContributorsLegacy()
	// }
	// const ret: GitHubAuthor[] | null = contrs[path]
	// 	? Array.from(contrs[path])
	// 	: null
	// if (!ret) {
	// 	console.error(
	// 		'Document path:',
	// 		path,
	// 		'not found within contributors:',
	// 		Object.keys(contrs)
	// 	)
	// 	return await getContributorsLegacy()
	// }
	// const headers = {
	// 	...(!!import.meta.env.GITHUB_TOKEN && {
	// 		Authorization: 'Bearer ' + import.meta.env.GITHUB_TOKEN,
	// 	}),
	// }
	for (let i = 0; i < props.mentioned.length; i++) {
		// if (
		// 	ret.filter(
		// 		(value: GitHubAuthor) => value.login === props.mentioned[i]
		// 	).length > 0
		// )
		// 	continue
		// const url = 'https://api.github.com/users/' + props.mentioned[i]
		// let user: GitHubAuthor = await result.json()
		const user = await getGitHubAuthor(props.mentioned[i])
		if (!user) continue
		ret.push(user)
	}
	return ret
}

// const getContributorsLegacy = async function () {
// 	let url =
// 		'https://api.github.com/repos/' +
// 		site.value.themeConfig.repo +
// 		'/commits?path=' +
// 		site.value.themeConfig.docsDir +
// 		'/' +
// 		page.value.relativePath

// 	const headers = {
// 		...(!!import.meta.env.GITHUB_TOKEN && {
// 			Authorization: 'Bearer ' + import.meta.env.GITHUB_TOKEN,
// 		}),
// 	}

// 	const result = await universalFetch(url, { headers })
// 	let commits: { author: GitHubAuthor }[] = await result.json()
// 	let contributors: GitHubAuthor[] = []

// 	const contributorExists = (login: string) =>
// 		contributors.filter((value) => value.login === login).length > 0

// 	for (let i = 0; i < commits.length; i++) {
// 		if (
// 			commits[i]?.author?.login &&
// 			!contributorExists(commits[i].author.login)
// 		) {
// 			contributors.push(commits[i].author)
// 		}
// 	}

// 	// mentioned
// 	for (let i = 0; i < props.mentioned.length; i++) {
// 		url = 'https://api.github.com/users/' + props.mentioned[i]
// 		const result = await universalFetch(url, { headers })
// 		let user: GitHubAuthor = await result.json()
// 		if (!contributorExists(user.login)) contributors.push(user)
// 	}
// 	return contributors
// }

let contributors = ref(await getContributors())
watch(page, async () => {
	contributors.value = await getContributors()
})
</script>
