/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#e1fcff',
        background: '#001719',
        primary: '#9af6fe',
        secondary: '#002023',
        accent: '#02daed',
      },
    },
  },
  plugins: [],
}
