/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	,'./src/components/JobForm.tsx'
	],
	theme: {
		extend: {
			colors: {
				'primary': '#0374E2',
				'secondary': '#002838',
				'accent': '#FBC252',
			},
			screens: {
				'xs': '375px',
				...defaultTheme.screens,
			},
		},
		container:{
			center:true
		}
	},
	plugins: [
	],
}
