/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./docusaurus.config.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Luciole", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  darkMode: ["class", "[data-theme='dark']"],
  plugins: [],
  blocklist: ["container"],
};
