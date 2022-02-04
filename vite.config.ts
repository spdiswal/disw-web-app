import preactPlugin from "@preact/preset-vite"
import { unlinkSync } from "fs"
import { minify as minifyHtml } from "html-minifier-terser"
import { basename, extname, resolve as resolvePath } from "path"
import type { ConfigEnv, Plugin, UserConfig } from "vite"
import { defineConfig, loadEnv } from "vite"
import type * as MainServerTsx from "./main/main-server"
import tailwindConfig from "./tailwind.config.cjs"

type ServerOrientedBuild = typeof MainServerTsx

const relativeOutputFolder = "./build/www"
const relativeServerOrientedBuild = `${relativeOutputFolder}/main-server.js`

// Read more:
// https://vitejs.dev/config/
//
// Don't forget to update the Vite section in the README.
//
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const profileName = env.VITE_PROFILE_NAME
    const debugProductionBuild = env.VITE_DEBUG_PRODUCTION_BUILD === "true"
    
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
                "+profile/content/predefined": path(`main/profile/content/${profileName}`),
                //
                "+elements": path("main/elements/"),
                "+i18n": path("main/i18n/"),
                "+profile": path("main/profile/"),
                "+theme": path("main/theme/"),
                "+types": path("main/types/"),
                "+test/fakes": path("test/fakes/"),
            },
        },
        publicDir: false,
        plugins: [
            preactPlugin({
                devtoolsInProd: debugProductionBuild,
            }),
            preRenderIndexHtmlPlugin({
                debugProductionBuild,
            }),
            !debugProductionBuild && minifyIndexHtmlPlugin(),
            !debugProductionBuild && deleteServerOrientedBuildArtifactPlugin(),
        ],
        server: {
            port: 5000,
            strictPort: true,
        },
        preview: {
            port: 80,
            strictPort: true,
        },
        build: {
            emptyOutDir: false, // Overridden by `--emptyOutDir` when making a server-oriented build.
            outDir: path(relativeOutputFolder),
            minify: !debugProductionBuild,
            rollupOptions: {
                output: {
                    // Read more:
                    // https://rollupjs.org/guide/en/#outputassetfilenames
                    //
                    assetFileNames: stripEmittedAssetFilenamesOfLocalSubstring,
                },
            },
        },
        ssr: {
            noExternal: true,
        },
    }
})

type PreRenderIndexHtmlPluginOptions = {
    readonly debugProductionBuild: boolean
}

/**
 * Substitutes the placeholders in `index.html` with the HTML fragments defined
 * by `main-server.tsx`.
 */
function preRenderIndexHtmlPlugin({
    debugProductionBuild,
}: PreRenderIndexHtmlPluginOptions): Plugin {
    return {
        name: "pre-render-index-html",
        apply: isClientOrientedProductionBuild,
        transformIndexHtml: async (html: string) => {
            const serverOrientedBuild = await importServerOrientedBuild()
            
            return serverOrientedBuild.substituteHtmlFragments(html, {
                indentBody: debugProductionBuild,
                tailwindConfig,
            })
        },
    }
}

async function importServerOrientedBuild(): Promise<ServerOrientedBuild> {
    // The module to be imported does not exist until Vite has completed the
    // server-oriented build.
    // Using a separate variable, `relativeServerOrientedBuild`, instead of a
    // string literal as argument to the `import()` directive halts TypeScript
    // from statically checking if the module exists.
    return await import(relativeServerOrientedBuild) as ServerOrientedBuild
}

/**
 * Minifies `index.html` via `html-minifier-terser`.
 */
function minifyIndexHtmlPlugin(): Plugin {
    return {
        name: "minify-index-html",
        apply: isClientOrientedProductionBuild,
        transformIndexHtml: async (html: string) => minifyHtml(html, {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        }),
    }
}

/**
 * Deletes the `main-server.js` build artifact from the file system,
 * as it is not a part of the final distribution of the web app.
 */
function deleteServerOrientedBuildArtifactPlugin(): Plugin {
    return {
        name: "delete-server-oriented-build-artifact",
        apply: isClientOrientedProductionBuild,
        closeBundle: () => {
            unlinkSync(path(relativeServerOrientedBuild))
        },
    }
}

function isClientOrientedProductionBuild(
    config: UserConfig,
    { command }: ConfigEnv,
): boolean {
    const isClientOriented = !config.build?.ssr
    return isClientOriented && command === "build"
}

function path(relativeToProjectRoot: string): string {
    return resolvePath(__dirname, relativeToProjectRoot)
}

/**
 * Removes the `.local` substring from the emitted asset filenames.
 */
function stripEmittedAssetFilenamesOfLocalSubstring(
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
