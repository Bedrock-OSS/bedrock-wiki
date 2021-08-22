require('molangjs/syntax/molang-prism-syntax')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const baseUrl = '/'

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
			if (frontMatter.data.title === void 0) {
				throw new Error(
					'File ' +
						path.join(joinedPath, 'index.md') +
						' has invalid frontmatter!'
				)
			}
		} else if (stats.isFile()) {
			// Don't include non-markdown files, or the index page itself
			if (!file.endsWith('.md') || file.endsWith('index.md')) return

			const str = fs.readFileSync(joinedPath, 'utf8')
			let frontMatter = matter(str)
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
				link,
				activeMatch: `^${link}`,
			})
			if (frontMatter.data.title === void 0) {
				throw new Error(
					'File ' + joinedPath + ' has invalid frontmatter!'
				)
			}
		}
	})

	return data.sort(
		({ data: dataA, text: textA }, { data: dataB, text: textB }) => {
			if (dataA.nav_order == null && dataB.nav_order != null) return 1
			if (dataA.nav_order != null && dataB.nav_order == null) return -1
			if (dataA.nav_order != null && dataB.nav_order != null)
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

	markdown: {
		lineNumbers: true,
		config: (md) => {
			md.use(require('./theme/Utils/full-headers'))
		},
	},

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
		[
			'script',
			{},
			`!function(){try {var d=document.documentElement.classList;d.remove('light','dark');var e=localStorage.getItem('docTheme');if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);m.media!==t||m.matches?d.add('dark'):d.add('light')}else if(e) d.add(e)}catch(e){}}()`,
		],
	],

	themeConfig: {
		repo: 'bedrock-oss/bedrock-wiki',
		docsDir: 'docs',

		// vitepress config right now
		algolia: {
			apiKey: '10cfe09996bc971de563cfdde5ee438e',
			indexName: 'wiki-bedrock',
		},

		editLinks: true,
		editLinkText: '⚙️ Edit this page on GitHub.',
		lastUpdated: true,
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
			{
				text: 'Legacy Wiki',
				link: 'https://old-wiki.bedrock.dev/',
			},
		],

		sidebar: {
			'/': getSidebar(),
		},
	},
}
