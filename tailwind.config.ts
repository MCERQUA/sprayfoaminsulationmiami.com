import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Atlantic Coastal palette (token names inherited; values = teal/lagoon/coral) ===
        cream: "#F2F8FA",          // page mist
        sand: "#E4F1F4",           // alt foam
        white: "#FFFFFF",          // cards
        // Brand
        clay: {
          DEFAULT: "#0C5A6B",      // primary — deep Atlantic teal ("ocean")
          dark: "#083F4D",
          light: "#1C8FA3",
          50: "#EAF5F7",
          100: "#D3EBEF",
          200: "#A6D6DE",
          300: "#6FB8C6",
          400: "#1C8FA3",
          500: "#0C5A6B",
          600: "#083F4D",
          700: "#062E38",
          800: "#041E25",
          900: "#020F13",
        },
        sage: {
          DEFAULT: "#12A4A0",      // secondary — tropical lagoon teal
          dark: "#0C7A77",
          light: "#3FBFBB",
          50: "#E5F7F6",
          100: "#C6EEED",
          200: "#8DDCDB",
          300: "#54C9C7",
          400: "#3FBFBB",
          500: "#12A4A0",
          600: "#0C7A77",
          700: "#085450",
        },
        gold: {
          DEFAULT: "#FF6B5B",      // accent — coral
          dark: "#E2503F",
          light: "#FF8E81",
          50: "#FFF1EF",
          100: "#FFDED9",
          200: "#FFBDB3",
          300: "#FF8E81",
          400: "#FF6B5B",
          500: "#E2503F",
          600: "#C03D2F",
        },
        // Text
        espresso: "#0B2B33",       // headings — ink
        cocoa: "#33474D",          // body — slate
        mocha: "#5E7178",          // muted — steel
        // Borders / dividers
        adobe: "#CFE3E8",          // cool mist line
        adobeDark: "#AFCDD4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "9999px 9999px 2rem 2rem",
        arch2: "12rem 12rem 2rem 2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F2F8FA 0%, #E5F4F6 40%, #F2F8FA 70%, #F2F8FA 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(18,164,160,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(12,90,107,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #0C5A6B 0%, #1C8FA3 100%)",
        "sage-gradient": "linear-gradient(135deg, #12A4A0 0%, #3FBFBB 100%)",
        "gold-gradient": "linear-gradient(135deg, #FF6B5B 0%, #FF8E81 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(12, 90, 107, 0.20), 0 4px 12px -6px rgba(11, 43, 51, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(12, 90, 107, 0.24), 0 10px 30px -10px rgba(11, 43, 51, 0.10)",
        card: "0 2px 8px -2px rgba(11, 43, 51, 0.06), 0 1px 3px -1px rgba(11, 43, 51, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(12, 90, 107, 0.22), 0 8px 20px -8px rgba(11, 43, 51, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(12, 90, 107, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
