/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gray: {
          dark: "#1A1E2C",
          medium: "#8E94A7",
          light: "#E7E9F0",
          stroke: "#EBEBF9",
        },
        blue: {
          dark: "#0346F2",
          medium: "#04C3FF",
          light: "#F2F5FE",
        },
        orange: {
          dark: "#F2994A",
          light: "#EBD7D7",
        },
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
      boxShadow: {
        "3xl": "8px 8px 16px 4px rgba(133, 139, 146, 0.06);",
      },
      borderWidth: {
        "border-custom": "0.5px",
      },
    },
  },
  plugins: [],
};
