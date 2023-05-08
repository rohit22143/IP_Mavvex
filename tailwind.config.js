/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      container: {
        center: true,
      },
      colors: {
        brand: "#F76454",
        dark2: "#252A31",
        cloud_light: "#F5F7F9",
        cloud_dark: "#BAC7D5",
        cloud_normal: "#E8EDF1",
        dark1: "#060606",
        textSecondary: "#747981",
      },
      boxShadow: {
        box_shadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        "robot-mono": ["Roboto Mono", "monospace"],
        "robot-slab": ["Roboto Slab", "serif"],
        merienda: ["Merienda", "cursive"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};