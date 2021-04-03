import Layout from './Components/Layout.vue'
import FilePath from './Components/Content/FilePath.vue'
import Panel from './Components/Content/Panel.vue'
import { Theme } from 'vitepress'
import { Component, watchEffect } from 'vue'
import 'virtual:windi.css'
import './Styles/main.css'
import { currentTheme } from './Composables/theme'

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

// Update the theme
watchEffect(() => {
	if (currentTheme.value === 'dark') document.body.classList.add('dark')
	else if (currentTheme.value === 'light')
		document.body.classList.remove('dark')
})

export default theme
