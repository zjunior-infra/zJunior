/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	,'./src/components/JobForm.tsx'
	],
	theme: {
		extend: {
			keyframes:{
				'wig': {
					'0%, 100%': { transform: 'translate-x-20' },
				}
			},
			animation:{
				'wig': 'wig 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
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
