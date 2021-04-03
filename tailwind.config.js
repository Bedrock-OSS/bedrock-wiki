const colors = require('tailwindcss/colors')

module.exports = {
	plugins: [require('windicss/plugin/typography')],

	darkMode: 'class',
	theme: {
		colors: {
			gray: colors.trueGray,
		},
	},
}
