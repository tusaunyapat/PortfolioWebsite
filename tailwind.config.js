/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#005F9E",
        primarycom: "#FA8128",
        test: "#B2BEB5",
        grey: "#9ca3af",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
