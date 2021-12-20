import PreactPlugin from "@preact/preset-vite"
import { minify as minifyHtml } from "html-minifier-terser"
import { basename, extname, resolve as resolvePath } from "path"
import { defineConfig, loadEnv, type Plugin } from "vite"

// Read more:
// https://vitejs.dev/config/
//
// Don't forget to update the Vite section in the README.
//
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    
    return {
        root: path("main"),
        resolve: {
            // The declaration order of aliases matter, as Vite resolves aliases
            // in this order. Thus, the longer and more specific aliases should
            // be declared first.
            alias: {
                // The alias below lets Vite embed just the specified profile
                // content into the production distribution while preserving hot
                // module replacement during development.
                "+profile/content/predefined": path(`main/profile/content/${env.VITE_PROFILE_NAME}`),
                //
                "+profile": path("main/profile/"),
                "+types": path("main/types/"),
            },
        },
        publicDir: false,
        plugins: [
            DisplayProfileNameInTitlePlugin({
                titleName: env.VITE_TITLE_NAME,
            }),
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
            rollupOptions: {
                output: {
                    // Read more:
                    // https://rollupjs.org/guide/en/#outputassetfilenames
                    //
                    assetFileNames: removeLocalSubstringFromEmittedAssetFilenames,
                },
            },
        },
    }
})

function path(relativeToProjectRoot: string): string {
    return resolvePath(__dirname, relativeToProjectRoot)
}

function DisplayProfileNameInTitlePlugin(
    options: { titleName: string },
): Plugin {
    return {
        name: "display-profile-name-in-title",
        transformIndexHtml: async (html: string) => html.replace(
            "<title>(replaced by VITE_TITLE_NAME)</title>",
            `<title>${options.titleName}</title>`,
        ),
    }
}

function MinifyIndexHtmlPlugin(): Plugin {
    return {
        name: "minify-index-html",
        transformIndexHtml: async (html: string) => minifyHtml(html, {
            collapseWhitespace: true,
        }),
    }
}

function removeLocalSubstringFromEmittedAssetFilenames(
    assetInfo: { name?: string },
): string {
    const assetsFolder = "assets"
    const localSubstringToRemove = ".local"
    
    if (assetInfo.name) {
        const assetName = basename(assetInfo.name, extname(assetInfo.name))
        
        if (assetName.endsWith(localSubstringToRemove)) {
            return `${assetsFolder}/${assetName.slice(0, -localSubstringToRemove.length)}.[hash][extname]`
        }
    }
    
    return `${assetsFolder}/[name].[hash][extname]`
}
