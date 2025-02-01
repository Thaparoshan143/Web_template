import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				'theme': '#665191',
				'theme-alt': '#554080',
				'theme-w': '#efefef',
				'theme-w-alt': '#eaeaea',
				'theme-g': '#dddddd',
				'theme-g-alt': '#cdcdcd',
				'theme-r': '#ec2315',
				'theme-r-alt': '#db1204'
			},
			fontFamily: {
				main: '"Smooch Sans", serif;',
				'main-a': '"Roboto Condensed", serif'
			}
		}
	},

	plugins: []
} satisfies Config;