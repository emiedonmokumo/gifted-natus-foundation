import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gobold: ['Gobold', 'sans-serif'],
        low:['low']
      },
      screens: {
        sm: { 'max': '500px' },
        md: { 'min': '501px', 'max': '768px' },
        lg: { 'min': '769px' },
      },
    },
  },
  plugins: [],
};
export default config;
