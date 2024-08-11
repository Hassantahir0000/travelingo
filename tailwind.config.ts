import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-blur": "#18A1FF",
        "pale-cyan": "#94D4FF",
        "dodger-blue": "#18A1FF",
        "light-sky-blue": "#83CCFF",
        "maya-blue": "#5FBEFF",
        "sky-blue": "#3CAFFF",
      },
    },
  },
  plugins: [],
};
export default config;
