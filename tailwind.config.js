/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      bevietnam: ["Be Vietnam Pro", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
