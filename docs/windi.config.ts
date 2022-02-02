import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	plugins: [
		require('windicss/plugin/typography'),
		require('windicss/plugin/aspect-ratio'),
	],

	extract: {
		include: ['.vitepress/**/*.{vue,ts}'],
		exclude: ['**/*.md'],
	},

	theme: {
		extend: {
			transitionProperty: {
				spacing: 'margin, padding',
			},
		},
	},

	darkMode: 'class',
})
