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
        '9px': '0.563rem',
        '26px': '1.625rem',
        '38px': '2.375rem',
        '45px': '2.8125rem',
        '48px': '3rem',
        '60px': '3.75rem',
        '70px': '4.375rem',
        '111px': '6.938rem',
        '133px': '8.313rem',
        '200px': '12.5rem',
      }
    },
  },
  plugins: [],
};
