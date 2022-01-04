const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat'],
        'serif': ['Montserrat',],
        'mono': ['Montserrat',],
        'display': ['Montserrat',],
        'body': ['Montserrat'],
      }
    },
  },
  plugins: [],
}