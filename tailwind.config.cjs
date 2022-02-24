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
    darkMode: "class",
    theme: {
        colors: {
            "accent": colors.blue,
            "neutral": colors.slate,
            "primary": colors.orange,
            "white": colors.white,
        },
        screens: {
            "sm": "560px",
            "md": "900px",
            "lg": "1500px",
        },
        extend: {
            borderRadius: {
                "1/3": "33.333333%",
            },
            fontFamily: {
                "sans": [`"Inter var"`, ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                "description-list": "max-content 1fr",
            },
            height: {
                "4.5": "1.125rem",
            },
            maxWidth: {
                "until-sm": "calc(min(36rem, 100vw) - 6rem)",
                "until-md": "calc(min(48rem, 100vw) - 6rem)",
                "until-lg": "calc(min(72rem, 100vw) - 6rem)",
            },
            outlineOffset: {
                "-2": "-2px",
            },
            outlineWidth: {
                3: "3px",
            },
            width: {
                "1/3-minus-gap-10": "calc(33.333333% - 1/3*(2.5rem))",
                "2/3-minus-gap-10": "calc(66.666667% - 2/3*(2.5rem))",
                "1/8-minus-gap-16": "calc(12.5% - 1/8*(4rem))",
                "2/8-minus-gap-16": "calc(25% - 2/8*(4rem))",
                "3/8-minus-gap-16": "calc(37.5% - 3/8*(4rem))",
                "4/8-minus-gap-16": "calc(50% - 4/8*(4rem))",
                "5/8-minus-gap-16": "calc(62.5% - 5/8*(4rem))",
                "6/8-minus-gap-16": "calc(75% - 6/8*(4rem))",
                "7/8-minus-gap-16": "calc(87.5% - 7/8*(4rem))",
            },
        },
    },
    variants: {},
    plugins: [],
}
