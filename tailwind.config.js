/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
  extend: {
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      redBrand: "#d9534f",
      redBorder: "#d43f3a",
    },
    fontSize: {
      "2xl": "30px",
    },
  },
},
  plugins: [],
}
