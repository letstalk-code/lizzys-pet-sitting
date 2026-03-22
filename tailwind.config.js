/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal:    '#2BA8A4',
        orange:  '#F07A30',
        cream:   '#FAFAF8',
        charcoal:'#2C2C2C',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body:    ['DM Sans',   'sans-serif'],
      },
    },
  },
  plugins: [],
}
