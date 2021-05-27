import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Bedrock Wiki',
			},
		}),
		WindiCSS(),
	],
})
