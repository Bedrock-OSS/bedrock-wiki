import Layout from './Components/Layout.vue'
import CodeHeader from './Components/Content/CodeHeader.vue'
import Spoiler from './Components/Content/Spoiler.vue'
import Label from './Components/Content/Label.vue'
import FolderView from './Components/Content/FolderView/FolderView.vue'

import YouTubeEmbed from './Components/Content/YouTubeEmbed.vue'
import Button from './Components/Content/Button.vue'
import JQEmbed from './Components/Content/JQEmbed.vue'
import WikiImage from './Components/Content/WikiImage.vue'
import Card from './Components/Content/Card.vue'
import CardLink from './Components/Content/CardLink.vue'
import Homepage from './Components/Pages/Homepage.vue'
import NotFound from './Components/Pages/NotFound.vue'
import MolangGraph from './Components/MoLang/Graph.vue'

import { Theme } from 'vitepress'
import { Component } from 'vue'
import Component404 from '../../404.md'
import './Styles/styles'

// Add global components to this array to register them automatically
const globalComponents: [string, Component][] = [
	['CodeHeader', CodeHeader],
	['Spoiler', Spoiler],
	['Label', Label],
	['FolderView', FolderView],
	['YouTubeEmbed', YouTubeEmbed],
	['JQEmbed', JQEmbed],
	['BButton', Button],
	['WikiImage', WikiImage],
	['CardLink', CardLink],
	['Card', Card],
	['Homepage', Homepage],
	['NotFound', NotFound],
	['MolangGraph', MolangGraph],
]

const theme: Theme = {
	Layout,
	// @ts-ignore
	NotFound: Component404, //Custom 404
	enhanceApp({ app, router, siteData }) {
		for (const [componentName, globalComponent] of globalComponents) {
			app.component(componentName, globalComponent)
		}
	},
}

export default theme
