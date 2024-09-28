/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
			'md': '768px',
			'lg': '1200px',
			'xl': '1440px',
      'xxl': '1680px'
		},
		colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
			'7e': '#7E7E7E',
			'18': '#181818',
			'31': '#313131',
			'f5': '#F5F5F5',
			'': '#',
			'': '#',
			'': '#',

    }
  },
  plugins: [],
}

