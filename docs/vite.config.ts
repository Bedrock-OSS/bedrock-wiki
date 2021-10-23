import WindiCSS from 'vite-plugin-windicss'
import {VitePWA} from 'vite-plugin-pwa'
import {defineConfig} from 'vite'
// @ts-ignore
import errorUtility from './error'

export default defineConfig({
    plugins: [
        WindiCSS(),
        errorUtility()
    ],
})
