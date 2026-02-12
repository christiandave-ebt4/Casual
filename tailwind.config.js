/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  "#f9f4f6",
          100: "#f3e6eb",
          200: "#e3bfc9",
          300: "#d399a7",
          400: "#b94d63",
          500: "#8b1e3f", // main burgundy
          600: "#7a1a37",
          700: "#5c142a",
          800: "#3d0d1c",
          900: "#1f070e",
        },
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}