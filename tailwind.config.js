/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#3366FF',
        customWhite: '#FAFCFD',
        customGrey: '#FAFCFD',
        customGreyy: '#808080',
        customlightBlue: "#F2F6FD",
        customDarkBlue: "#0D2159",
      }
    },
  },
  plugins: [],
}