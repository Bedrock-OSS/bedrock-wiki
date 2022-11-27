import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fetch from 'node-fetch'

const baseUrl = '/'

// define whether big pages should be built.
// fastBuild should only be used when testing, since it will not compile some of the wikis content.
const excludeFiles = [
	'entities/vanilla-usage-components.md',
	'entities/vanilla-usage-spawn-rules.md',
	'entities/vuc-full.md',
	'entities/vusr-full.md',
]

const fastBuild = process.env.fastBuild === 'true ' // SPACE has to be there, since the SET var=val command adds a space at the end!

if (fastBuild && process.env.NODE_ENV == 'production') {
	console.log(
		`\nINFO: fastBuild selected. the files:\n${JSON.stringify(
			excludeFiles,
			null,
			4
		)}\nwill not be compiled!\n`
	)
}

function formatLink(path: string) {
	return path.split(/\\|\//g).join('/').replace('.md', '')
}

/*
Gets the categories from within the frontmatter of an index.md file, and returns them as list.
 */
function getCategoryOrder(frontMatter: matter.GrayMatterFile<string>) {
	let data: { [Key: string]: number } = {}
	if (!frontMatter.data.categories) {
		return data
	}

	frontMatter.data.categories.forEach(function (
		category: { title: string | number },
		index: number
	) {
		data[category.title] = index + 1
	})

	return data
}

function getCategories(frontMatter: matter.GrayMatterFile<string>) {
	let data: {
		text: any
		data: any
		tags: any
		prefix: any
		section: boolean
		color: any
		link: string
		activeMatch: string
	}[] = []
	if (!frontMatter.data.categories) {
		return data
	}

	frontMatter.data.categories.forEach(function (
		category: {
			nav_order: number
			category: any
			title: any
			tags: any
			prefix: any
			color: any
		},
		index: any
	) {
		category.nav_order = -1
		category.category = category.title
		data.push({
			text: category.title,
			data: category,
			tags: category.tags,
			prefix: category.prefix,
			section: true,
			color: category.color,
			link: '',
			activeMatch: ' ',
		})
	})

	return data
}

let order: { [Key: string]: number }

/*
Recursively generate the navigation links for the sidebar.
*/
function generateSidebar(base: string, dir: string) {
	let data: {
		text: any
		data: { [key: string]: any }
		children?: any
		tags?: any
		prefix?: any
		section?: any
		color?: any
		link?: string
		activeMatch?: string
	}[] = []
	let files = fs.readdirSync(dir)

	files.forEach(function (file) {
		let joinedPath = path.join(dir, file)
		let stats = fs.statSync(joinedPath)
		// Handle top level directories
		if (
			stats.isDirectory() &&
			fs.existsSync(path.join(joinedPath, 'index.md'))
		) {
			const str = fs.readFileSync(
				path.join(joinedPath, 'index.md'),
				'utf8'
			)
			let frontMatter
			try {
				frontMatter = matter(str)
			} catch (e) {
				joinedPath = path.relative(
					process.cwd(),
					path.join(joinedPath, 'index.md')
				)
				console.log(
					// @ts-ignore
					`::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
				throw new Error(
					// @ts-ignore
					`File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
			}

			order = getCategoryOrder(frontMatter)

			let children = generateSidebar(base, joinedPath).concat(
				getCategories(frontMatter)
			)

			children.sort(
				(
					{ data: dataA, text: textA },
					{ data: dataB, text: textB }
				) => {
					// Default to max int, so without nav order you will show second
					// Multiply by category value if it exists
					let navA =
						(dataA.nav_order || 50) +
							(order[dataA.category] || 0) * 100 ||
						Number.MAX_SAFE_INTEGER
					let navB =
						(dataB.nav_order || 50) +
							(order[dataB.category] || 0) * 100 ||
						Number.MAX_SAFE_INTEGER

					// Tie goes to the text compare! (Will also apply for elements without nav order)
					if (navA == navB) {
						return textA.localeCompare(textB)
					}

					// Return nav order
					return navA - navB
				}
			),
				data.push({
					text: frontMatter.data.title,
					data: frontMatter.data,
					children: children,
				})

			if (frontMatter.data.title === void 0) {
				throw new Error(
					'File ' +
						path.join(joinedPath, 'index.md') +
						' has invalid frontmatter!'
				)
			}
		}

		// Handle the normal files
		else if (stats.isFile()) {
			// Don't include non-markdown files, or the index page itself
			if (!file.endsWith('.md') || file.endsWith('index.md')) return

			const str = fs.readFileSync(joinedPath, 'utf8')
			let frontMatter
			try {
				frontMatter = matter(str)
			} catch (e) {
				joinedPath = path.relative(process.cwd(), joinedPath)
				console.log(
					// @ts-ignore
					`::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
				throw new Error(
					// @ts-ignore
					`File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
			}
			const link = formatLink(joinedPath.toString().replace(base, ''))

			// Don't include hidden pages (ignores children)
			if (frontMatter.data.hidden === true) return

			let prefix = null

			if (frontMatter.data.prefix != null) {
				prefix = frontMatter.data.prefix
			}

			let tags = null

			if (frontMatter.data.tags != null) {
				tags = frontMatter.data.tags
			}
			data.push({
				text: frontMatter.data.title,
				data: frontMatter.data,
				tags: tags,
				prefix: prefix,
				section: frontMatter.data.section || false,
				color: frontMatter.data.color || 'none',
				link,
				activeMatch: `^${link}`,
			})
			if (frontMatter.data.title === void 0) {
				joinedPath = path.relative(process.cwd(), joinedPath)
				console.log(
					`::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter!`
				)
				throw new Error(`File ${joinedPath} has invalid frontmatter!`)
			}
		}
	})

	return data.sort(
		({ data: dataA, text: textA }, { data: dataB, text: textB }) => {
			// Default to max int, so without nav order you will show second
			// Multiply by category value if it exists
			let navA =
				(dataA.nav_order || 50) + (order[dataA.category] || 0) * 100 ||
				Number.MAX_SAFE_INTEGER
			let navB =
				(dataB.nav_order || 50) + (order[dataB.category] || 0) * 100 ||
				Number.MAX_SAFE_INTEGER

			// Tie goes to the text compare! (Will also apply for elements without nav order)
			if (navA == navB) {
				return textA.localeCompare(textB)
			}

			// Return nav order
			return navA - navB
		}
	)
}

function getSidebar() {
	let docsPath = path.join(process.cwd(), 'docs')
	return generateSidebar(docsPath, docsPath)
}

let attempts = 0
let limit = ''

const req = async (url2: string) => {
	attempts++
	if (!process.env.GITHUB_TOKEN)
		return { message: 'Unable to get GITHUB_TOKEN' }
	let res = await fetch(
		`https://api.github.com/repos/Bedrock-OSS/bedrock-wiki/${url2}`,
		{
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		}
	)
	let response = res
	limit = response.headers.get('X-RateLimit-Limit') || ''
	return response.json()
}
const getAuthors = async () => {
	let files = await req('git/trees/wiki?recursive=1')
	// @ts-ignore
	if (!files.tree) return files
	// @ts-ignore
	files = files.tree
		.filter(({ path }: { path: string }) =>
			path.match('docs/(?!public|.vite.*$).*.md')
		)
		// @ts-ignore
		.map((e) => e.path)
	console.log('Getting data for the files ' + files)
	let contributors = {}
	let authors = []

	// TODO: Fix this
	return contributors

	// await new Promise((resolve, reject) => {
	// 	for (let i = 0; i < files.length; i++) {
	// 		req(`commits?path=${files[i]}`).then((commit) => {
	// 			if (!commit[0]) {
	// 				// Github token rate limit?
	// 				console.log(
	// 					`GitHub token rate limit reached after ${attempts} requests (limit: ${limit})`
	// 				)
	// 				return commit
	// 			}
	// 			if (!commit[0].author) return commit
	// 			contributors[files[i]] = commit
	// 				.map((e) => e.author)
	// 				.filter(
	// 					(v, i, a) => a.findIndex((t) => t.login == v.login) == i
	// 				)
	// 			authors.push(contributors[files[i]].login)
	// 			if (i == files.length - 1) resolve()
	// 		})
	// 	}
	// })

	// return contributors
}

module.exports = (async function () {
	return {
		lang: 'en-US',
		title: 'Bedrock Wiki',
		description: 'Technical bedrock knowledge-sharing wiki.',
		base: baseUrl,

		markdown: {
			lineNumbers: true,
			config: (md: { use: (arg0: any) => void }) => {
				md.use(require('./theme/Utils/full-headers'))
			},
		},

		head: [
			[
				'link',
				{
					rel: 'manifest',
					type: 'application/manifest+json',
					href: '/manifest.webmanifest',
				},
			],
			[
				'link',
				{
					rel: 'icon',
					href: '/favicon.ico',
				},
			],
			[
				'apple-touch-icon',
				{
					rel: 'icon',
					href: '/assets/images/favicons/apple-touch-icon.png',
					sizes: '180x180',
				},
			],
			[
				'mask-icon',
				{
					rel: 'icon',
					href: '/assets/images/favicons/safari-pinned-tab.svg',
					color: '#60c3fa',
				},
			],
			[
				'meta',
				{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1',
				},
			],

			[
				'meta',
				{
					name: 'theme-color',
					content: '#60c3fa',
				},
			],
			// open graph metadata: used for link previews in eg. discord
			// [
			// 	'meta',
			// 	{
			// 		property: 'og:type',
			// 		content: 'website',
			// 	},
			// ],
			// [
			// 	'meta',
			// 	{
			// 		property: 'og:site_name',
			// 		content: 'Bedrock Wiki',
			// 	},
			// ],
			// [
			// 	'meta',
			// 	{
			// 		property: 'og:image',
			// 		content:
			// 			'https://wiki.bedrock.dev/assets/images/homepage/wikilogo.png',
			// 	},
			// ],
			[
				'script',
				{
					src: '/registerSW.js',
				},
			],
			[
				'script',
				{},
				`!function(){try {var d=document.documentElement.classList;d.remove('light','dark');var e=localStorage.getItem('docTheme');if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);m.media!==t||m.matches?d.add('dark'):d.add('light')}else if(e) d.add(e)}catch(e){}}()`,
			],
			[
				'script',
				{},
				`// Matomo analytics
				var _paq = window._paq = window._paq || [];
				/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
				_paq.push(['trackPageView']);
				_paq.push(['enableLinkTracking']);
				(function() {
				  var u="//hopper.bedrock.dev/wikihopper/";
				  _paq.push(['setTrackerUrl', u+'hopper.php']);
				  _paq.push(['setSiteId', '1']);
				  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
				  g.async=true; g.src=u+'hopper.js'; s.parentNode.insertBefore(g,s);
				})();`,
			],
		],

		themeConfig: {
			repo: 'bedrock-oss/bedrock-wiki',
			docsDir: 'docs',

			// vitepress config right now
			algolia: {
				appId: 'N9ZHAYJQII',
				apiKey: 'a664f5a5da631810a08e1a48554fe523',
				indexName: 'wiki-bedrock',
			},

			editLinks: true,
			editLinkText: '⚙️ Edit this page on GitHub.',
			lastUpdated: 'Last Updated',

			nav: [
				{
					text: 'Discord',
					link: '/discord',
					activeMatch: '^/discord',
				},
				{
					text: 'Contribute',
					link: '/contribute',
					activeMatch: '^/contribute',
				},
				{
					text: 'Bedrock.dev',
					link: 'https://bedrock.dev',
				},
				{
					text: 'MS Docs',
					link: 'https://docs.microsoft.com/en-us/minecraft/creator/',
				},
			],

			sidebar: {
				'/': getSidebar(),
			},

			contributors: await getAuthors(),
		},
		srcExclude: fastBuild ? excludeFiles : [],
		ignoreDeadLinks: true,
	}
})()

// exports.excludeFiles = excludeFiles
