/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'bg-gray-500',
    'bg-blue-800',
    'bg-green-500',
    // Agrega las clases que quieras asegurar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
