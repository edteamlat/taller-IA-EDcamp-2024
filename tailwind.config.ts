import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ed-red": {
          500: "#982C2C",
        },
        "ed-brown": {
          400: "#2B2525",
          800: "#2B2525",
          900: "#040200",
        },
        "ed-gray": {
          500: "#727272",
        },
        "ed-white": "#E3E3E3",
        "ed-text": "#CDCDCD",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
export default config
