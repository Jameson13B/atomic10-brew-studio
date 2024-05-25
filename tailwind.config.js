/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anta: ["Anta", "sans-serif"],
      },
      fontSize: {
        tiny: "0.5rem",
        small: "0.75rem",
        medium: "1rem",
        large: "1.5rem",
        xlarge: "2rem",
      },
      margin: {
        6: "6px",
        12: "12px",
        16: "16px",
        24: "24px",
      },
      padding: {
        6: "6px",
        12: "12px",
        24: "24px",
      },
    },
  },
  plugins: [],
}
