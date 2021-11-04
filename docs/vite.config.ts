import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
// @ts-ignore
import errorUtility from './error'

export default defineConfig({
	plugins: [
		WindiCSS(),
        // @ts-ignore
		errorUtility(),
	],
})
