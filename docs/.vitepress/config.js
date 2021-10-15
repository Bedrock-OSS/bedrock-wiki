require('molangjs/syntax/molang-prism-syntax')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const fetch = require('node-fetch')

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
			let frontMatter
			try {
				frontMatter = matter(str)
			} catch (e) {
				joinedPath = path.relative(
					process.cwd(),
					path.join(joinedPath, 'index.md')
				)
				console.log(
					`::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
				throw new Error(
					`File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
			}
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
			let frontMatter
			try {
				frontMatter = matter(str)
			} catch (e) {
				joinedPath = path.relative(process.cwd(), joinedPath)
				console.log(
					`::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
				)
				throw new Error(
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
let attempts = 0
const req = async (url2) => {
	attempts++
	if (!process.env.GITHUB_TOKEN)
		return { message: 'Unable to get GITHUB_TOKEN' }
	res = await fetch(
		`https://api.github.com/repos/Bedrock-OSS/bedrock-wiki/${url2}`,
		{
			headers: {
				'User-Agent': 'request',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		}
	)
	return await res.json()
}
const getAuthors = async () => {
	let files = await req('git/trees/wiki?recursive=1')
	if (!files.tree) return files
	files = files.tree
		.filter(({ path }) => path.match('docs/(?!public|.vite.*$).*.md'))
		.map((e) => e.path)
	console.log("Getting data for the files " + files)
	let contributors = {}
	let authors = []
	await new Promise((resolve, reject) => {
		for (let i = 0; i < files.length; i++) {
			req(`commits?path=${files[i]}`).then((commit) => {
				if (!commit[0]) {
					// Github token rate limit?
					console.log(`GitHub token rate limit reached after ${attempts} requests`)
					return commit
				}
				if (!commit[0].author) return commit
				contributors[files[i]] = commit
					.map((e) => e.author)
					.filter(
						(v, i, a) => a.findIndex((t) => t.login == v.login) == i
					)
				authors.push(contributors[files[i]].login)
				if (i == files.length - 1) resolve()
			})
		}
	})

	return contributors
}

module.exports = (async function () {
	return {
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
			],

			sidebar: {
				'/': getSidebar(),
			},

			contributors: await getAuthors(),
		},
	}
})()
