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
      backgroundImage: {
        "card-gradient":
          "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)",
        "card-bottom-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      },
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
          foreground: "#718EBF",
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
        "secondary-border": "#F4F5F7",
        "accent-blue": "#343C6A",
        "input-background": "#F5F7FA",
        "soft-blue": "#718EBF",
        "placeholder-text": "#8BA3CB",
        "hover-blue": "#396AFF",
        "grey-text": "#B1B1B1",
        "active-link": "#232323",
        "card-border": "#DFEAF2",
        "primary-yellow": "#FFF5D9",
        "primary-green": "#DCFAF8",
        "paypal-blue": "#E7EDFF",
        "negative-red": "#FF4B4A",
        "positive-green": "#41D4A8",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        shake: "shake 0.2s ease-in-out 0s 2",
      },
      height: {
        "screen-minus-header": "calc(100dvh - 149px)",
        // "mobile-screen-minus-header": "calc(100dvh - 141px)",
      },
      width: {
        "screen-minus-sidebar": "calc(100dvw - 250px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
