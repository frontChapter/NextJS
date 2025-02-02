import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "12": "48px",
        "20": "80px",
        "24": "96px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mutedForeground: "#A1A1AA",
      },
    },
  },
  plugins: [],
} satisfies Config;
