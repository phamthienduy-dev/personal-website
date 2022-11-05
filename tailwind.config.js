/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
      colors: {
        primary: '#023E8A',
        secondary: {
          100: '#CAF0F8',
          200: '#ADE8F4',
          300: '#90E0EF',
        },
      },
      textColor: {
        primary: '#454545',
      },
      fontFamily: {
        body: ['Montserrat'],
      },
    },
  },
};
