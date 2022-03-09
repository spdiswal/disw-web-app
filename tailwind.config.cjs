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
    content: [
        "./main/**/*.{ts,tsx}",
        "./main/index.html",
    ],
    darkMode: "class",
    theme: {
        colors: {
            "accent": colors.blue,
            "neutral": colors.slate,
            "primary": colors.orange,
            "warning": colors.amber,
            "white": colors.white,
        },
        screens: {
            // Breakpoints are defined by 'rem' units instead of 'px' units to
            // allow the page to adapt properly to root font sizes larger than
            // the usual 16px.
            // The 'xs' breakpoint defines the minimum width supported by the
            // page. It is triggered only by very small devices or by zooming
            // in.
            "xs": "20rem",
            "sm": "40rem",
            "md": "60rem",
            "lg": "80rem",
        },
        extend: {
            backgroundPosition: {
                "link-underline": "0% 100%",
            },
            backgroundSize: {
                "link-underline-invisible": "0% 2px",
                "link-underline-visible": "100% 2px",
            },
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
            maxHeight: {
                "120": "30rem",
                "160": "40rem",
            },
            maxWidth: {
                "main-xs": "calc(100vw - 2*2rem)",
                "main-sm": "min(45rem, calc(100vw - 2*3rem))",
                "main-md": "calc(100vw - 2*4rem)",
                "main-lg": "min(100rem, calc(100vw - 2*5rem))",
                "main-xl": "calc(120rem - 2*6rem)",
            },
            minWidth: {
                "main-xs-minus-margin": "calc(20rem - 2*2rem)",
                "main-xs": "20rem",
            },
            outlineOffset: {
                "-2": "-2px",
            },
            spacing: {
                "main-xs": "2rem",
                "main-2xs": "calc(2*2rem)",
                "main-sm": "3rem",
                "main-2sm": "calc(2*3rem)",
                "main-md": "4rem",
                "main-lg": "6rem",
            },
            width: {
                "4.5": "1.125rem",
                "1/2-minus-gap-main-md": "calc(50% - 1/2*(4rem))",
                "1/2-minus-gap-main-lg": "calc(50% - 1/2*(5rem))",
            },
        },
    },
    variants: {},
    plugins: [],
}
