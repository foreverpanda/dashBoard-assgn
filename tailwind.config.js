/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-rgba": "rgba(5,4,64,255)",
        "lightblue-rgba": "rgba(46,45,105,255)",
        "bg-main": "rgba(245,246,248,255)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
