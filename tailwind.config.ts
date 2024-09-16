import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pri":{
          0: "#fafaf9",
          1: "#52575D",
          2: "#000000",
          3: "#DFD8C8",
          4: "#1f1617",
        },
        "sec": {
          // 0: "#f0f0f0",
          // 1: "#a6a6a6",
          // 2: "#a6a6a6",
          // 3: "#a6a6a6",
          4: "#726668",
        }
      },
      boxShadow: {
        'profile': '0 0px 20px 0px rgba(0, 0, 0, 0.3)',
      }
      
    },
  },
  plugins: [],
};
export default config;
