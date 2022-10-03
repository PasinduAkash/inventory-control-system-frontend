/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#272727",
        grayDark: "#313131",
        textGray: "#808080",
      },
    },
  },
  plugins: [],
};
