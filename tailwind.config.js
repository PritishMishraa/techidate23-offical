/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorax: ["Valorax"],
      },
    },
  },
  plugins: [require("daisyui")],
}
