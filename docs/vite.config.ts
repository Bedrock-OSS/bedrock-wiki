import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
// @ts-ignore
import errorUtility from './error'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		WindiCSS(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Bedrock Wiki',
				short_name: 'Bedrock Wiki',
				description: 'Technical bedrock knowledge-sharing wiki.',
				theme_color: '#60c3fa',
				background_color: '#393a40',
				icons: [
					{
						src: 'assets/images/favicons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'assets/images/favicons/android-chrome-256x256.png',
						sizes: '256x256',
						type: 'image/png',
					},
				],
			},
		}),
		// @ts-ignore
		errorUtility(),
	],
})
