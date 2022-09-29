const plugin = require("tailwindcss/plugin");

const configFromTokens = require("./css-utils/config-from-tokens");
const customPropertiesFromTheme = require("./css-utils/custom-properties-from-theme");

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
  plugins: [
    customPropertiesFromTheme({ colors: "color" }),
    // Custom utility classes
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "flow-space": (value) => {
            return { "--flow-space": value };
          },
        },
        { values: theme("spacing") }
      );
    }),
  ],
};
