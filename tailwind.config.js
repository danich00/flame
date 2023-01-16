/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height : {
        'h-110': '28rem'
      },
      fontFamily : {
        'Karma': ['Karma', 'serif']
      }
    },
  },
  plugins: [],
}
