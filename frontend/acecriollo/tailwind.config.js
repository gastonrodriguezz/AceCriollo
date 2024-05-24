/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			//Colors used in the project
			colors: {
				primary: '#a3f883',
				secondary: '#1c2a1d',
			},
		},
	},
	plugins: [],
};
