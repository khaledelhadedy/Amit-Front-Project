/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerColor: '#212529',
        mainColor: "#EC232B",
        secondColor: "#56555C",
        pColor: "#737373",
        butColor:"#262626",
        forgotPcolor : "#8A8A8A",
      },
    },
  },
  plugins: [],
};
