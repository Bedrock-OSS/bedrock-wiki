import Layout from './Components/Layout.vue'
import FilePath from './Components/Content/FilePath.vue'
import Label from './Components/Content/Label.vue'
import YouTubeEmbed from './Components/Content/YouTubeEmbed.vue'
import { Theme } from 'vitepress'
import { Component, watchEffect } from 'vue'
import './Styles/styles'

// Add global components to this array to register them automatically
const globalComponents: [string, Component][] = [
	['FilePath', FilePath],
	['Label', Label],
	['YouTubeEmbed', YouTubeEmbed],
]

const theme: Theme = {
	Layout,
	// @ts-ignore
	NotFound: () => '404', //Custom 404
	enhanceApp({ app, router, siteData }) {
		for (const [componentName, globalComponent] of globalComponents) {
			app.component(componentName, globalComponent)
		}
	},
}

export default theme
