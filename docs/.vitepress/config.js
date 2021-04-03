require('molangjs/syntax/molang-prism-syntax')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const baseUrl = '/bedrock-wiki-vite/'

function formatLink(path) {
	return path.split(/\\|\//g).join('/').replace('.md', '')
}

function generateSidebar(base, dir, data) {
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
				children: generateSidebar(base, joinedPath, []),
			})
		} else if (stats.isFile()) {
			if (!file.endsWith('.md')) return

			const str = fs.readFileSync(joinedPath, 'utf8')
			let frontMatter = matter(str)
			const link = formatLink(joinedPath.toString().replace(base, ''))

			// Don't include hidden pages (ignores children)
			if (frontMatter.data.hidden == true) return

			data.push({
				text: frontMatter.data.title,
				data: frontMatter.data,
				link,
				activeMatch: `^${link}`,
			})
		}
	})
	return data
}

function getSidebar() {
	let docsPath = path.join(process.cwd(), 'docs')
	return generateSidebar(docsPath, docsPath, [])
}

module.exports = {
	lang: 'en-US',
	title: 'Bedrock Wiki',
	description: 'Technical bedrock knowledge-sharing wiki.',
	base: baseUrl,

	markdown: {
		lineNumbers: true,
	},

	themeConfig: {
		repo: 'bedrock-oss/bedrock-wiki-vite',
		docsDir: 'docs',

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',

		nav: [
			{
				text: 'bedrock.dev',
				link: 'https://bedrock.dev',
			},
		],

		sidebar: {
			'/': getSidebar(),
		},
	},
}
