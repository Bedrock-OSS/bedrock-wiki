import Layout from './Components/Layout.vue'
import FilePath from './Components/Content/FilePath.vue'
import Panel from './Components/Content/Panel.vue'
import { Theme } from 'vitepress'
import { Component, watchEffect } from 'vue'
import 'virtual:windi.css'
import './Styles/main.css'

// Add global components to this array to register them automatically
const globalComponents: [string, Component][] = [
	['FilePath', FilePath],
	['Panel', Panel],
]

const theme: Theme = {
	Layout,
	NotFound: Layout, //Custom 404
	enhanceApp({ app, router, siteData }) {
		for (const [componentName, globalComponent] of globalComponents) {
			app.component(componentName, globalComponent)
		}
	},
}

export default theme
