const defaultTheme = require("tailwindcss/defaultTheme")

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
        extend: {
            fontFamily: {
                "sans": [`"Inter var"`, ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [],
}
