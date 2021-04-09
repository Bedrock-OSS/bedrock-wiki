import Layout from './Components/Layout.vue'
import FilePath from './Components/Content/FilePath.vue'
import Label from './Components/Content/Label.vue'
import YouTubeEmbed from './Components/Content/YouTubeEmbed.vue'
import Button from './Components/Content/Button.vue'
import JQEmbed from './Components/Content/JQEmbed.vue'
import { Theme } from 'vitepress'
import { Component } from 'vue'
import Component404 from '../../404.md'
import './Styles/styles'

// Add global components to this array to register them automatically
const globalComponents: [string, Component][] = [
	['FilePath', FilePath],
	['Label', Label],
	['YouTubeEmbed', YouTubeEmbed],
	['JQEmbed', JQEmbed],
	['Button', Button],
]

const theme: Theme = {
	Layout,
	// @ts-ignore
	NotFound: () => Component404, //Custom 404
	enhanceApp({ app, router, siteData }) {
		for (const [componentName, globalComponent] of globalComponents) {
			app.component(componentName, globalComponent)
		}
	},
}

export default theme
