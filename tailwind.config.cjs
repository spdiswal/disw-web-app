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
    content: ["./main/**/*.{html,ts,tsx}"],
    theme: {
        colors: {
            "accent": colors.blue,
            "black": colors.black,
            "neutral": colors.gray,
            "primary": colors.amber,
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
