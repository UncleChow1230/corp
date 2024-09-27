import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'shake-rotate': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-1deg) translateX(-1px)' },
          '50%': { transform: 'rotate(1deg) translateX(1px)' },
          '75%': { transform: 'rotate(-1deg) translateX(-1px)' },
        },
      },
      animation: {
        'shake-rotate': 'shake-rotate 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;

