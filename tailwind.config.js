/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      chromebook: "1200px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1921px",
      "landscape-sm": {
        raw: "(min-width: 600px) and (max-width: 1024px) and (min-height: 600px) and (orientation: landscape)",
      },
      "landscape-md": {
        raw: "(min-width: 768px) and (max-width: 1366px) and (max-height: 700px) and (orientation: landscape)",
      },
      "landscape-lg": {
        raw: "(min-width: 1200px) and (max-height: 750px)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "primary-border": "#E6EFF5",
        "accent-blue": "#343C6A",
        "input-background": "#F5F7FA",
        "soft-blue": "#718EBF",
        "placeholder-text": "#8BA3CB",
        "hover-blue": "#396AFF",
        "grey-text": "#B1B1B1",
        "active-link": "#232323",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
