const plugin = require("tailwindcss/plugin");

const configFromTokens = require("./css-utils/config-from-tokens");
const customPropertiesFromTheme = require("./css-utils/custom-properties-from-theme");
const pxToRem = require("./css-utils/px-to-rem");
const valueMap = require("./css-utils/value-map");

const colorTokens = require("./design-tokens/colors.json");
const textSizeTokens = require("./design-tokens/text-sizes.json");

const colors = configFromTokens(colorTokens);
const fontSize = valueMap(configFromTokens(textSizeTokens), (size) => {
  return `${pxToRem(size)}rem`;
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors,
    fontSize,
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
