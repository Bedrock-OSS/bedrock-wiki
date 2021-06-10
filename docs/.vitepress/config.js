require('molangjs/syntax/molang-prism-syntax')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const markdownItKatex = require('markdown-it-katex')

const baseUrl = '/bedrock-wiki-vite/'

function formatLink(path) {
	return path.split(/\\|\//g).join('/').replace('.md', '')
}

function generateSidebar(base, dir) {
	let data = []
	let files = fs.readdirSync(dir)
	files.forEach(function (file) {
		let joinedPath = path.join(dir, file)
		let stats = fs.statSync(joinedPath)
		if (
			stats.isDirectory() &&
			fs.existsSync(path.join(joinedPath, 'index.md'))
		) {
			const str = fs.readFileSync(
				path.join(joinedPath, 'index.md'),
				'utf8'
			)
			let frontMatter = matter(str)
			data.push({
				text: frontMatter.data.title,
				data: frontMatter.data,
				children: generateSidebar(base, joinedPath),
			})
		} else if (stats.isFile()) {
			// Don't include non-markdown files, or the index page itself
			if (!file.endsWith('.md') || file.endsWith('index.md')) return

			const str = fs.readFileSync(joinedPath, 'utf8')
			let frontMatter = matter(str)
			const link = formatLink(joinedPath.toString().replace(base, ''))

			// Don't include hidden pages (ignores children)
			if (frontMatter.data.hidden == true) return

			let badge = null

			if (frontMatter.data.badge != null && frontMatter.badge != '') {
				badge = {
					text: frontMatter.data.badge,
					color: frontMatter.data.badge_color,
				}
			}

			let tags = null

			if (frontMatter.data.tags != null) {
				tags = frontMatter.data.tags
			}

			data.push({
				text: frontMatter.data.title,
				data: frontMatter.data,
				badge: badge,
				tags: tags,
				link,
				activeMatch: `^${link}`,
			})
		}
	})

	return data.sort(
		({ data: dataA, text: textA }, { data: dataB, text: textB }) => {
			if (!dataA.nav_order && dataB.nav_order) return 1
			if (dataA.nav_order && !dataB.nav_order) return -1
			if (dataA.nav_order && dataB.nav_order)
				return dataA.nav_order - dataB.nav_order
			return textA.localeCompare(textB)
		}
	)
}

function getSidebar() {
	let docsPath = path.join(process.cwd(), 'docs')
	return generateSidebar(docsPath, docsPath)
}

module.exports = {
	lang: 'en-US',
	title: 'Bedrock Wiki',
	description: 'Technical bedrock knowledge-sharing wiki.',
	base: baseUrl,

	head: [
		// Enable to make the bedrock wiki installable
		// [
		// 	'link',
		// 	{
		// 		rel: 'manifest',
		// 		type: 'application/json',
		// 		href: '/manifest.webmanifest',
		// 	},
		// ],
		// [
		// 	'script',
		// 	{
		// 		src: '/registerSW.js',
		// 	},
		// ],
	],

	markdown: {
		lineNumbers: true,
		config: md => {
			md.use(markdownItKatex)
		}
	},

	themeConfig: {
		repo: 'bedrock-oss/bedrock-wiki-vite',
		docsDir: 'docs',

		// vitepress config right now
		algolia: {
			apiKey: 'c57105e511faa5558547599f120ceeba',
			indexName: 'vitepress',
		},

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
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
				text: 'bedrock.dev',
				link: 'https://bedrock.dev',
			},
			// {
			// 	text: 'News',
			// 	link: '/news',
			// 	activeMatch: '^/news',
			// },
		],

		sidebar: {
			'/': getSidebar(),
		},
	},
}
