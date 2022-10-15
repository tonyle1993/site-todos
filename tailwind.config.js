/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme');
const tailwindcssRadix = require('tailwindcss-radix');
const {
  getTypographyPlugin,
  getScreens,
  getColors
} = require('./src/tailwind');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        mobile: '335px',
        tablet: '630px',
        laptop: '840px',
        desktop: '1180px'
      }
    },
    screens: {
      ...getScreens()
    },
    colors: {
      ...defaultColors,
      ...getColors()
    },
    extend: {}
  },
  plugins: [tailwindcssRadix(), getTypographyPlugin]
};
