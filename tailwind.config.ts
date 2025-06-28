import { heroui } from "@heroui/theme"
import type { Config } from "tailwindcss"
const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require("tailwindcss/lib/util/flattenColorPalette")

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme("colors"))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ":root": newVars,
  })
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(alert|avatar|button|card|chip|form|input|link|popover|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--slate-200)",
        body: "var(--slate-300)",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-20%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(20%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInFromBottom: {
          "0%": {
            transform: "translateY(40%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        slideInFromBottom: "slideInFromBottom 1s ease-out forwards",
      },
    },
  },
  plugins: [
    heroui(),
    addVariablesForColors,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: any }) {
      const newAnimationDelays = {
        ".delay-0": {
          animationDelay: "0s",
        },
        ".delay-500": {
          animationDelay: "0.5s",
        },
        ".delay-1000": {
          animationDelay: "1s",
        },
        ".delay-1500": {
          animationDelay: "1.5s",
        },
        ".delay-2000": {
          animationDelay: "2s",
        },
      }
      addUtilities(newAnimationDelays, ["responsive", "hover"])
    },
  ],
} satisfies Config
