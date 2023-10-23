/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        blue: {
          DEFAULT: "#034AA6",
          'light': "#2987D9",
          'greenLight': "#B4CED9",
        },

        yellow: {
          DEFAULT: "#F2BC1B",
        },

        brown: {
          DEFAULT: "#736D5C",
        },
      }
    },
  },
  plugins: [],
}
