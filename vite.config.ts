import PreactPlugin from "@preact/preset-vite"
import { minify as minifyHtml } from "html-minifier-terser"
import { resolve as resolvePath } from "path"
import { defineConfig, type Plugin } from "vite"

// Read more:
// https://vitejs.dev/config/
//
// Don't forget to update the Vite section in the README.
//
export default defineConfig({
    root: path("main"),
    publicDir: false,
    plugins: [
        MinifyIndexHtmlPlugin(),
        PreactPlugin(),
    ],
    server: {
        port: 5000,
        strictPort: true,
    },
    build: {
        emptyOutDir: true,
        outDir: path("build/www"),
    },
})

function path(relativeToProjectRoot: string): string {
    return resolvePath(__dirname, relativeToProjectRoot)
}

function MinifyIndexHtmlPlugin(): Plugin {
    return {
        name: "minify-index-html",
        async transformIndexHtml(html: string) {
            return minifyHtml(html, {
                collapseWhitespace: true,
            })
        },
    }
}