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
        "custom-gradient-sobre-mim":
          "linear-gradient(to bottom, #17C6E2, #020617)",
        "custom-gradient-hero-rodape":
          "linear-gradient(to bottom, #000, #020617)",
      },

      colors: {
        "custom-color-sobre-mim":
          "linear-gradient(to bottom, #17C6E2, #020617)",
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
