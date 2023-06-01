/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
