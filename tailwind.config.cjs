/** @type {import('tailwindcss').Config} */
/**
 * @param Nomenclaturas
 * T: Titulo
 * D: Descripcion
 */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'titleNegro': 'rgb(33,53,71)',
        'Tcardwhite': 'rgba(255, 255, 255, 0.87)',
        'Dcardblack': 'rgba(60, 60, 60, 0.7)',
        'Dcardwhite': 'rgba(235, 235, 235, 0.6)',
      }
    },
  },
  darkMode: "class",
  // plugins: [require('@tailwindcss/forms')],

}
