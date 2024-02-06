/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      fontFamily: {
        sans: ["LatoWeb", "sans-serif"],
      },
    extend: {
      colors: {
            "transparent-white": "rgba(255, 255, 255, 0.87)",
            "primary": "#7e01ff",
            "secondary": "#66ffcc",
            "emphasis": "#ff9494",
            "light-gray": "#d9d9d9",
      },
    },
  },
  plugins: [],
};
