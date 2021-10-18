/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


module.exports = {
  mode: "jit",
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/*.svelte', './src/**/*.svelte'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem' },
    },
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        lightBlue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        lime: colors.lime,
        cyan: colors.cyan,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
