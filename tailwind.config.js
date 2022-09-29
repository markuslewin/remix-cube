const configFromTokens = require("./css-utils/config-from-tokens");

const colorTokens = require("./design-tokens/colors.json");

const colors = configFromTokens(colorTokens);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors,
    extend: {},
  },
  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
