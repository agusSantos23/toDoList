/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'myColor_1': '#18122B',
        'myColor_2': '#393053',
        'myColor_3': '#443C68',
        'myColor_4': '#635985'
      }
    },
  },
  plugins: [],
}