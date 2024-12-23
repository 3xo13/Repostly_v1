/** @type {import('tailwindcss').Config} */
export default {
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
        'main': '#131525',
        "desc":"#666B71",
        "head":"#131525",
        tealblue: '#016B81',
        tealCustom: "rgba(1, 107, 129, 1)",
        blackCustom: "rgba(31, 33, 38, 1)",
        whiteTransparent: "rgba(255, 255, 255, 0.16)",
      },
      opacity: {
        16: '0.16',
      },
      boxShadow: {
        custom: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)", // Custom shadow
      },
    },
  },
  plugins: [],
};
