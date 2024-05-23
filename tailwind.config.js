/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navbar: "#002E40",
        accent: "#F7B691",
        gray: "#D9D9D9",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      spacing: {
        '9': '0.563rem',
        '38': '2.375rem',
        '45': '2.8125rem',
        '48': '3rem',
        '70': '4.375rem',
        '111': '6.938rem',
      }
    },
  },
  plugins: [],
};
