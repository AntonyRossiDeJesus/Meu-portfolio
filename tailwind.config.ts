import { plugin } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        projeto01: "url('/assets/project01.webp')",
      },
    },

    screens: {
      "custom-smm": { min: "361px", max: "767px" },

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },

    // maxWidth: {
    //   // grid: "77.5rem",
    //   // "text-benefits": "66rem",
    //   // "area-icons": "54.6rem",
    //   // "area-mockups": "59.8rem",
    //   // "area-cards": "82.5rem",
    // },
    // height: {

    //   "area-cards": "35.1rem",
    // },
  },

  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".h-section-benefits": {
          height: "54.6rem ",
        },
        ".max-w-area-cards": {
          width: "82.5rem",
        },
        ".h-area-cards": {
          height: "35.1rem ",
        },
        ".max-w-area-icons": {
          width: "54.6rem",
        },
        ".maximo-w-grid": {
          width: "77.5rem",
        },
        ".max-w-area-mockups": {
          width: "59.8rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
