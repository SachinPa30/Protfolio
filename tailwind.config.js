const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans all relevant files
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#EC4899", // Pink
        accent: "#F59E0B", // Amber
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": {
          "--primary": theme("colors.primary"),
          "--secondary": theme("colors.secondary"),
          "--accent": theme("colors.accent"),
          ...newVars,
        },
      });
    }),
  ],
};
