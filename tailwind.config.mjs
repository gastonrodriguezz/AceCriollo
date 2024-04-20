/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
	
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
corePlugins: {
	prefix: 'tw-',
	preflight: true,
  },
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		  },
		  colors: {
			'fc':'#151d25',
			'white':'#ffffff',
			'bg1':'#1a2f23',
			'bg2':'#15202b',
			'greeno':'#27BE67'

		  },
		  extend: {
			backgroundColor: {
			},
			padding:{
			'15':'15px',
			'20':'20px',
			'25':'25px',
			},
			spacing: {
				'20':'20px',
				'200':'200px',
			  '128': '32rem',
			  '144': '36rem',
			  '25':'25%',
			  '10p':'10%',
			  '20p':'20%',
			  '30p':'30%',
			  '40p':'40%',
			  '50p':'50%',
			  '70p':'70%',
			  '80p':'80%',
			  '80v':'80vh',
			},
			zIndex: {
				'5': '5',
				'3':'3',
			  },
			 
			borderRadius: {
			  '4xl': '2rem',
			  '30': '30px',
			}
		  },
		},	
		plugins: []


	
}
