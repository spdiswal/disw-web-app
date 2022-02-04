import preactPlugin from "@preact/preset-vite"
import { unlinkSync } from "fs"
import { minify as minifyHtml } from "html-minifier-terser"
import { basename, extname, resolve as resolvePath } from "path"
import { slate as tailwindColourSlate } from "tailwindcss/colors"
import type { ConfigEnv, Plugin, UserConfig } from "vite"
import { defineConfig, loadEnv } from "vite"

const relativeOutputFolder = "./build/www"
const relativeServerOrientedBuildArtifactFile = `${relativeOutputFolder}/main-server.js`

// Read more:
// https://vitejs.dev/config/
//
// Don't forget to update the Vite section in the README.
//
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const profileName = env.VITE_PROFILE_NAME
    
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
            preactPlugin(),
            preRenderIndexHtmlPlugin(),
            minifyIndexHtmlPlugin(),
            deleteServerOrientedBuildArtifactPlugin(),
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

/**
 * Substitutes the placeholders in `index.html` with the HTML fragments
 * exported by `main-server.tsx` and a background colour from Tailwind CSS
 * that corresponds to `bg-neutral-900`.
 */
function preRenderIndexHtmlPlugin(): Plugin {
    return {
        name: "pre-render-index-html",
        apply: isClientOrientedProductionBuild,
        transformIndexHtml: async (html: string) => {
            const staticHtml = await importStaticHtmlFromServerOrientedBuild()
            const { title, body } = staticHtml
            
            return html
                .replace("/* [tailwindcss bg-neutral-50] */", `background-color: ${tailwindColourSlate["50"]};`)
                .replace("/* [tailwindcss bg-neutral-900] */", `background-color: ${tailwindColourSlate["900"]};`)
                .replace("<title>[main-server.tsx title]</title>", title)
                .replace("<!-- [main-server.tsx body] -->", body)
        },
    }
}

async function importStaticHtmlFromServerOrientedBuild(): Promise<StaticHtml> {
    // The module to be imported does not exist until Vite has completed the
    // server-oriented build.
    // Using a separate variable, `relativeServerOrientedBuildArtifactFile`,
    // instead of a string literal as argument to the `import()` directive
    // halts TypeScript from statically checking if the module exists.
    return await import(relativeServerOrientedBuildArtifactFile) as StaticHtml
}

/**
 * `title` and `body` are exported by `main-server.tsx`.
 */
type StaticHtml = {
    readonly title: string
    readonly body: string
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
            unlinkSync(path(relativeServerOrientedBuildArtifactFile))
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
