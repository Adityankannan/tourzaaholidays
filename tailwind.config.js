/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        dark: {
          900: "#070709",
          800: "#0f0f13",
          700: "#16161d",
          600: "#1e1e28",
          500: "#2a2a38",
        },
        cream: "#fdf6ec",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        glow: "glow 2.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(251,191,36,0.35)" },
          "50%": { boxShadow: "0 0 25px 6px rgba(251,191,36,0.65)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 40%, rgba(7,7,9,0.97) 100%)",
      },
    },
  },
  plugins: [],
};
