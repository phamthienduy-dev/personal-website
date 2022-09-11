/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#58CAEA',
        200: '#339AF0',
        300: '#407bff',
      },
      secondary: {
        100: '#7A5BF5',
        200: '#4933F0',
        300: '#4C46BE',
      },
    },
  },
  plugins: [],
}