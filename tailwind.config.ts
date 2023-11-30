import tailwindcss from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  // Change this with the extensions you are going to use.
  content: ["./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  theme: {
    screens: {
      // These are the default media queries.
      // We're declaring them to make it easier to import and use in react for js checks
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#89BAED",
          2: "#A1C3E7",
          3: "#CEDFEB",
          4: "#EEF5F9",
        },
        purple: {
          DEFAULT: "#ADA2E5",
          2: "#D0CAEF",
          3: "#DFDCF1",
        },
        peach: {
          DEFAULT: "#F1A394",
          2: "#F4BBBA",
          3: "#ECD4D3",
        },
        gray: {
          DEFAULT: "#363B4B",
          2: "#787878",
          3: "#999",
        },
        yellow: {
          DEFAULT: "#F9DDBE",
          3: "#FAE2C1",
        },
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        "blue-gradient-1":
          "linear-gradient(90deg, rgba(235, 245, 255, 0.80) 63.39%, rgba(233, 231, 247, 0.80) 99.73%))",
        "blue-gradient-2":
          "linear-gradient(126deg, #CEDFEB 4.43%, rgba(254, 253, 255, 0.00) 94.35%)",
        "violet-gradient-1":
          "linear-gradient(180deg, #C7BFF2 0%, #C2DDF5 100%)",
        "violet-gradient-2":
          "linear-gradient(180deg, #C5BCF0 0%, #B8D6F0 100%))",
        "violet-gradient-3":
          "linear-gradient(259deg, #C7BFF2 0%, #C2DDF5 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [typography, forms, tailwindcss, animate],
} satisfies Config;
