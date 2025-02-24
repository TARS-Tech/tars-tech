/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');
export default {

  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        // barlow: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

