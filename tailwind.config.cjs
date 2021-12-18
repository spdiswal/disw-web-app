const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

// Read more:
// https://tailwindcss.com/docs/configuration
//
// Don't forget to update the Tailwind CSS section in the README.
//
/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    content: ["./main/**/*.{ts,tsx}"],
    theme: {
        colors: {
            "primary": colors.amber,
            "neutral": colors.gray,
            "white": colors.white,
        },
        extend: {
            borderRadius: {
                "16": "4rem",
                "24": "6rem",
                "32": "8rem",
            },
            fontFamily: {
                "sans": [`"Inter var"`, ...defaultTheme.fontFamily.sans],
            },
            width: {
                "144": "36rem",
                "192": "48rem",
            },
        },
    },
    variants: {},
    plugins: [],
}
