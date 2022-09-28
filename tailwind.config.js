/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
