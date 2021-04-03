import Layout from './Layout.vue'
import FilePath from './Content/FilePath.vue'
import { Theme } from 'vitepress'
import { Component } from 'vue'
import 'virtual:windi.css'

// Add global components to this array to register them automatically
const globalComponents: [string, Component][] = [['FilePath', FilePath]]

const theme: Theme = {
	Layout,
	NotFound: Layout, //Custom 404
	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData`` is a `ref`` of current site-level metadata.

		for (const [componentName, globalComponent] of globalComponents) {
			app.component(componentName, globalComponent)
		}
	},
}

export default theme
