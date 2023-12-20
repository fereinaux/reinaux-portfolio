/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'pixelify': ['Pixelify Sans Variable'],
			'roboto': ["Roboto"]
		},
		extend: {
			animation: {
				grow: 'grow 1.5s infinite',
			},
			keyframes: {
				grow: {
					'0%': {
						transform: 'scale(1, 1)'
					},					
					'50%': {
						transform: 'scale(1.05, 1.05)'
					},
					'100%': {
						transform: '1scale(1, 1)'
					}
				},
			},
		},
	},
	plugins: [
		require('tailwind-typewriter')({
			wordsets: {
				dev: {
					words: ['💻 full stack developer', '👽 jedi master',],
					writeSpeed: 0.04,
					eraseSpeed: 0.04,
					pauseBetween: 0.7,
					delay: 0.5
				}
			}
		})
		// ...
	]
}
