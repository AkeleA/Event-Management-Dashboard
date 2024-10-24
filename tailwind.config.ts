import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "767px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0px 16px 24px 0px rgba(0, 0, 0, 0.15)",
        "table-inset": "inset 0px 1px 0px 0px #F3F4F6",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
