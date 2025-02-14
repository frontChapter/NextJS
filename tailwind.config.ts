import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(240 10% 3.9%)",
        },
        foreground: {
          DEFAULT: "hsl(240 10% 3.9%)",
          dark: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100% / 0.2)",
          dark: "hsl(240 3.7% 15.9% / 0.2)",
          foreground: {
            DEFAULT: "hsl(240 10% 3.9%)",
            dark: "hsl(0 0% 98%)",
          },
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(240 10% 3.9%)",
          foreground: {
            DEFAULT: "hsl(240 10% 3.9%)",
            dark: "hsl(0 0% 98%)",
          },
        },
        primary: {
          DEFAULT: "hsl(240 5.9% 10%)",
          dark: "hsl(0 0% 98%)",
          foreground: {
            DEFAULT: "hsl(0 0% 98%)",
            dark: "hsl(240 5.9% 10%)",
          },
        },
        secondary: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          dark: "hsl(240 3.7% 15.9%)",
          foreground: {
            DEFAULT: "hsl(240 5.9% 10%)",
            dark: "hsl(0 0% 98%)",
          },
        },
        muted: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          dark: "hsl(240 3.7% 15.9%)",
          foreground: {
            DEFAULT: "hsl(240 10% 3.9% / 0.6)",
            dark: "hsl(0 0% 98% / 0.6)",
          },
        },
        accent: {
          DEFAULT: "hsl(240 5% 64.9% / 0.15)",
          dark: "hsl(0 0% 98% / 0.15)",
          foreground: {
            DEFAULT: "hsl(240 5.9% 10%)",
            dark: "hsl(0 0% 98%)",
          },
        },
        destructive: {
          DEFAULT: "hsl(0 72.22% 50.59%)",
          dark: "hsl(0 62.8% 30.6%)",
          foreground: {
            DEFAULT: "hsl(0 0% 98%)",
            dark: "hsl(0 85.7% 97.3%)",
          },
        },
        border: {
          DEFAULT: "hsl(240 5.2% 33.9% / 0.1)",
          dark: "hsl(0 0% 98% / 0.1)",
        },
        input: {
          DEFAULT: "hsl(240 5.9% 90%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        ring: {
          DEFAULT: "hsl(240 5% 64.9%)",
          dark: "hsl(240 4.9% 83.9%)",
        },
        chart: {
          1: { DEFAULT: "hsl(12 76% 61%)", dark: "hsl(220 70% 50%)" },
          2: { DEFAULT: "hsl(173 58% 39%)", dark: "hsl(160 60% 45%)" },
          3: { DEFAULT: "hsl(197 37% 24%)", dark: "hsl(30 80% 55%)" },
          4: { DEFAULT: "hsl(43 74% 66%)", dark: "hsl(280 65% 60%)" },
          5: { DEFAULT: "hsl(27 87% 67%)", dark: "hsl(340 75% 55%)" },
        },
        brand: {
          DEFAULT: "hsl(27 96% 61%)",
          dark: "hsl(31 97% 72%)",
          foreground: {
            DEFAULT: "hsl(31 97% 72%)",
            dark: "hsl(27 96% 61%)",
          },
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
        "2xl": "calc(0.5rem + 4px)",
        xl: "calc(0.5rem + 2px)",
      },
      fontFamily: {
        code: ["Courier New", "monospace"],
        regular: ["--font-dana", "Arial", "sans-serif"],
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
            filter: "blur(.5rem)",
          },
          "50%": { filter: "blur(0)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "appear-zoom": {
          "0%": {
            opacity: "0",
            transform: "scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "pulse-hover": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        hover: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "hover-reverse": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "pulse-fade": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        appear: "appear 0.6s forwards ease-out",
        "appear-zoom": "appear-zoom 0.6s forwards ease-out",
        "pulse-hover": "pulse-hover 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      spacing: {
        container: "1280px",
        "8": "32px",
        "12": "48px",
        "20": "80px",
        "24": "96px",
      },
      boxShadow: {
        "glow-sm": "0 0 16px 0 hsl(240 10% 3.9% / 0.08) inset",
        "glow-md": "0 0 32px 0 hsl(240 10% 3.9% / 0.08) inset",
        "glow-lg": "0 0 64px 0 hsl(240 10% 3.9% / 0.06) inset",
        "dark-glow-sm": "0 0 16px 0 hsl(0 0% 98% / 0.08) inset",
        "dark-glow-md": "0 0 32px 0 hsl(0 0% 98% / 0.08) inset",
        "dark-glow-lg": "0 0 64px 0 hsl(0 0% 98% / 0.06) inset",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
