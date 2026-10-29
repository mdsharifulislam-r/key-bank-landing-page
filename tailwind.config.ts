import type { Config } from "tailwindcss";

/**
 * KeyBank design tokens.
 * Change the brand color by editing `primary.500` and rebalancing the scale
 * around it. 500 must stay the brand gold (#C9961B) unless the brand changes.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBF8EF",
          100: "#F6EDD4",
          200: "#EDD9A8",
          300: "#E2C06E",
          400: "#D6A83A",
          500: "#C9961B",
          600: "#A67B14",
          700: "#7C5C0F",
          800: "#5C4410",
          900: "#3A2A09",
        },
        cream: "#FBF3E2",
        brown: "#5C4410",
        navy: "#0F1033",
        mist: "#F6F6F8",
      },
      boxShadow: {
        card: "0 18px 50px -28px rgba(15, 16, 51, 0.35)",
        glow: "0 14px 36px -12px rgba(201, 150, 27, 0.55)",
      },
      maxWidth: {
        page: "80rem",
      },
    },
  },
};

export default config;
