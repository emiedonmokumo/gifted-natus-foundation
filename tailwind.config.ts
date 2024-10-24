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
        gobold: ['GoBold', 'sans-serif'],
      },
      screens: {
        sm: { 'max': '480px' },
        md: { 'min': '481px', 'max': '768px' },
        lg: { 'min': '769px' }
      },
    },
  },
  plugins: [],
};
export default config;
