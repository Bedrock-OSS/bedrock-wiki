import path from 'path'

// const createMarkdownToVueRenderFn = require('vitepress/dist/node/markdownToVue.js')

export default function errorUtility() {
	// let markdownToVue
    // let config
	return {
		name: 'error-utility',
		renderError(err) {
            console.log(`::error file=docs/error.js::${err.message}`)
		},
		// configResolved(resolvedConfig) {
		// 	config = resolvedConfig
		// 	markdownToVue = createMarkdownToVueRenderFn.createMarkdownToVueRenderFn(
		// 		resolvedConfig.root,
		// 		{},
		// 		[],
		// 		null,
		// 		true,
		// 	)
		// 	console.log(markdownToVue)
		// },
		// transform(code, id) {
		// 	if (id.endsWith(".md")) {
		// 		let result = markdownToVue(code, id, config.publicDir);
		// 		if (result && result.deadLinks && result.deadLinks.length > 0) {
		// 			console.log(result)
		// 		}
		// 	}
		// },
	}
}