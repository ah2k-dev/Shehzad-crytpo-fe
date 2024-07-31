import colors from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    light: {
      colors: {
        textColour: "#000",
      },
    },
    dark: {
      colors: {
        textColour: "#FFF",
      },
    },
    container: {
      center: true,
      padding: "1.75rem",
    },
    extend: {
      screens: {
        "2xl": "1400px",
        1050: "1050px",
        800: "800px",
        900: "900px",
        500: "500px",
      },
      transitionTimingFunction: {
        style: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      backgroundImage: {
        homeBg: "url('/background/homeBg.png')",
        cardBg: "url('/background/cardBg.png')",
        musicBg: "url('/background/musicBg.png')",
        spiralBg: "url('/background/spiral.png')",
      },
      colors: {
        blackcurrent: {
          // 50: "#FAF8FB",
          // 100: "#F4F0F7",
          // 200: "#E9E0EE",
          // 300: "#D6C6E1",
          // 400: "#BEA4CE",
          // 500: "#A27FB6",
          // 600: "#805D93",
          // 700: "#6E4E7D",
          // 800: "#5B4167",
          // 900: "#4E3956",
          // 950: "#2E1D35",
        50: '#fff1f1',
        100: '#ffe0e0',
        200: '#ffc7c7',
        300: '#ffa0a0',
        400: '#ff6969',
        500: '#f93a3a',
        600: '#e71b1b',
        700: '#c71313',
        800: '#a11313',
        900: '#851717',
        950: '#490606',
        },
        orange: {
          50: "#FFF9EB",
          100: "#FFEDC6",
          200: "#FFD888",
          300: "#FFBF4A",
          400: "#FFA724",
          500: "#F98107",
          600: "#DD5C02",
          700: "#B73D06",
          800: "#942E0C",
          900: "#7A270D",
          950: "#461202",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",

        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  },
};
