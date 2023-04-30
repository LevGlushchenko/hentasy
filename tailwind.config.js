const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.vue'],
  prefix: 'tw-',
  theme: {
    fontWeight: {
      bold: 600,
    },
    extend: {
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('tailwindcss')],
}
