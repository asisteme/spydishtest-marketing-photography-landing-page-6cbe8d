/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#f1f1f6",
        brandTitle: "#4c4c96",
        brandFigure: "#323261"
      }
    }
  },
  plugins: []
}
