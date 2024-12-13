/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'beige-ppal': '#BF8034',
        'beige-secundario': '#ECBF6C',
        'manteca': '#F5F5EB',
        'marron-claro':'#EFE7DA',
        'marron-medio': '#C2B7A5',
        'marron': '#B3907A',
        'marron-oscuro': '#84604E',
      }
    },
  },
  plugins: [],
}

