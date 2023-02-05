const { remove: removeDiacritics } = require('diacritics')

// From: https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

const slugify = (str) => {
	return (
		removeDiacritics(str)
			// Remove control characters
			.replace(rControl, '')
			// Replace special characters
			.replace(rSpecial, '-')
			// Remove continuous separators
			.replace(/\-{2,}/g, '-')
			// Remove prefixing and trailing separators
			.replace(/^\-+|\-+$/g, '')
			// ensure it doesn't start with a number (#121)
			.replace(/^(\d)/, '_$1')
			// lowercase
			.toLowerCase()
	)
}

function extractHeaderPlugin(md, include = ['h1', 'h2', 'h3']) {
	md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
		const token = tokens[i]
		if (include.includes(token.tag)) {
			const title = tokens[i + 1].content
			const idAttr = token.attrs.find(([name]) => name === 'id')
			const slug = idAttr && idAttr[1]
			const data = md.__data
			const headers = data.headers || (data.headers = [])
			headers.push({
				level: parseInt(token.tag.slice(1), 10),
				title: title,
				slug: slug || slugify(title),
			})
		}
		return self.renderToken(tokens, i, options)
	}
}
module.exports = extractHeaderPlugin
