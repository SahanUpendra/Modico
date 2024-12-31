/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F49625",
        "secondary": {
          100: "#303390",
          200: "#302F64",
        },
        "bg-primary": "#F4F4F4",
      },
    },
  },
  plugins: [],
}