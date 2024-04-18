import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primario": "#e55958",
        "secundario": "#3DA9FC",
        "acento": "#e45858",
        "blanco": "#FFFFFE",
        "negro": "#2b2c34",
        "gris": "#5F6C7B",
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        customTheme: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#e55958",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#6246ea",
            },
          },
        },
      },
    }),
  ],
};
export default config;
