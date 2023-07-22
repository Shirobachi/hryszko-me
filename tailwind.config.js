/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#e9f6f2',
        background: '#003926',
        primary: '#2c626d',
        secondary: '#16090d',
        accent: '#a75444',
      },
    },
  },
  plugins: [],
}
