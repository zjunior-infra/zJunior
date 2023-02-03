/** @type {import('tailwindcss').Config} */
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
			}
		},
		container:{
			center:true
		}
	},
	plugins: [
	],
}
