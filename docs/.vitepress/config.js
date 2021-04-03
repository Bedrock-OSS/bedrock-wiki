require('molangjs/syntax/molang-prism-syntax')

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

let formatLinkSync = function (path) {
	return path.split('\\').join('/').replace('.md', '')
}

String.prototype.toProperCase = function () {
	return this.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}

let generateSidebar = function (base, dir, data) {
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
			const str = fs.readFileSync(joinedPath, 'utf8')
			let frontMatter = matter(str)
			data.push({
				text: frontMatter.data.title,
				data: frontMatter.data,
				link: formatLinkSync(joinedPath.toString().replace(base, '')),
			})
		}
	})
	return data
}

let getSidebar = function () {
	let docsPath = path.join(process.cwd(), 'docs')
	return generateSidebar(docsPath, docsPath, [])
}

module.exports = {
	lang: 'en-US',
	title: 'VitePress',
	description: 'Vite & Vue powered static site generator.',
	base: '/bedrock-wiki-vite/',

	themeConfig: {
		repo: 'vuejs/vitepress',
		docsDir: 'docs',

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',

		nav: [
			{ text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
			{
				text: 'Config Reference',
				link: '/config/basics',
				activeMatch: '^/config/',
			},
			{
				text: 'Release Notes',
				link: 'https://github.com/vuejs/vitepress/releases',
			},
		],

		sidebar: {
			'/': getSidebar(),
		},
	},
}
