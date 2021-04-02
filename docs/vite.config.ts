import windicss from 'vite-plugin-windicss'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		windicss({
			scan: {
				dirs: ['.vitepress/theme'],
			},
		}),
	],
})
