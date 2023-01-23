/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	,'./src/components/JobForm.tsx'
	],
	theme: {
		extend: {},
		container:{
			center:true
		}
	},
	plugins: [
	],
}
