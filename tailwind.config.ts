import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#2E2F35',
        secondary: '#4ED8F3',
        titleColor: '#31A69C',
        text: '#58595D'
      },
      backgroundColor: {
        'bg-Banner': '#E0F8F2',
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        covered: ["var(--font-covered)", "cursive"],
      },
      boxShadow: {
        'solid-primary': '3px 4px #2E2F35',
        'solid-secondary': '3px 4px #FF6D2C',
      }
    },
  },
  plugins: [],
};
export default config;
