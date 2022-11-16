/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // cat: "url('../public/background.png')",
        cat: "url('../public/base.jpg')",
      }),
    },
    fontFamily: {
      nd: ["Bangers", "cursive"],
      vc: ["Kotta One", "serif"],
      md: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
}
