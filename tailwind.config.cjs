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
            "white": colors.white,
            "neutral": colors.slate,
            "primary": colors.blue,
            "accent-theme": colors.orange,
            "warning": colors.amber,
        },
        screens: {
            // Breakpoints are defined by 'rem' units instead of 'px' units to
            // allow the page to adapt properly to root font sizes larger than
            // the usual 16px.
            // The 'xs' breakpoint defines the minimum width supported by the
            // page. It is triggered only by very small devices or by zooming
            // in.
            // The '2xl' breakpoint defines the maximum width required by the
            // page.
            "xs": "20rem",
            "sm": "40rem",
            "md": "60rem",
            "lg": "80rem",
            "xl": "100rem",
            "2xl": "120rem",
        },
        extend: {
            backgroundPosition: {
                "link-underline": "0% 100%",
            },
            backgroundSize: {
                "link-underline-invisible": "0% 2px",
                "link-underline-visible": "100% 2px",
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
                "screen-xs": "calc(100vw - 2*2rem)",
                "screen-sm": "min(calc(1/2*(100rem - 5rem)), calc(100vw - 2*3rem))",
                "screen-md": "calc(100vw - 2*4rem)",
                "screen-lg": "min(100rem, calc(100vw - 2*5rem))",
                "screen-2xl": "120rem",
            },
            minWidth: {
                "screen-xs": "20rem",
                "screen-xs-minus-margin": "calc(20rem - 2*2rem)",
            },
            outlineOffset: {
                "-2": "-2px",
            },
            spacing: {
                "aspect-ratio-4-5": "calc(5/4 * 100%)",
                "aspect-ratio-4-3": "calc(3/4 * 100%)",
                "aspect-ratio-5-3": "calc(3/5 * 100%)",
                "aspect-ratio-5-2": "calc(2/5 * 100%)",
                "aspect-ratio-10-3": "calc(3/10 * 100%)",
                "screen-xs": "2rem",
                "2x-screen-xs": "calc(2*2rem)",
                "screen-sm": "3rem",
                "2x-screen-sm": "calc(2*3rem)",
                "screen-md": "4rem",
                "screen-lg": "5rem",
            },
            width: {
                "4.5": "1.125rem",
                "1/2-minus-screen-md-gap": "calc(50% - 1/2*(4rem))",
                "1/2-minus-screen-lg-gap": "calc(50% - 1/2*(5rem))",
            },
        },
    },
    variants: {},
    plugins: [],
}
