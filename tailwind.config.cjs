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
            maxWidth: {
                "until-sm": "calc(min(36rem, 100vw) - 6rem)",
                "until-md": "calc(min(48rem, 100vw) - 6rem)",
                "until-lg": "calc(min(72rem, 100vw) - 6rem)",
            },
            width: {
                "1/8": "12.5%",
                "2/8": "25%",
                "3/8": "37.5%",
                "4/8": "50%",
                "5/8": "62.5%",
                "6/8": "75%",
                "7/8": "87.5%",
            },
        },
    },
    variants: {},
    plugins: [],
}
