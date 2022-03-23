import preactPlugin from "@preact/preset-vite"
import { createReadStream, createWriteStream } from "fs"
import { readdir, stat, unlink } from "fs/promises"
import { minify as minifyHtml } from "html-minifier-terser"
import { join as joinPath, resolve as resolvePath } from "path"
import type { ConfigEnv, Plugin, UserConfig } from "vite"
import { defineConfig, loadEnv } from "vite"
import { createBrotliCompress } from "zlib"
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
                // The alias below lets Vite embed just the specified content
                // into the production distribution while preserving hot module
                // replacement during development.
                "+content": path(`main/content/${profileName}`),
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
            !debugProductionBuild && compressBuildArtifactsPlugin(),
        ],
        server: {
            host: "0.0.0.0",
            port: 8000,
            strictPort: true,
        },
        preview: {
            host: "0.0.0.0",
            port: 80,
            strictPort: true,
        },
        build: {
            assetsInlineLimit: 2048 /* bytes */,
            chunkSizeWarningLimit: 256 /* kilobytes */,
            reportCompressedSize: false,
            emptyOutDir: false, // Overridden by `--emptyOutDir` when making a server-oriented build.
            outDir: path(relativeOutputFolder),
            minify: !debugProductionBuild,
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
            minifyJS: {
                ecma: 2017,
                toplevel: true,
            },
            removeComments: true,
            sortAttributes: true,
            sortClassName: true,
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
        closeBundle: async () => {
            await unlink(path(relativeServerOrientedBuild))
        },
    }
}

/**
 * Generates a Brotli-compressed file (with the `.br` extension) of every
 * `.css`, `.html`, and `.js` file in the production distribution.
 */
function compressBuildArtifactsPlugin(): Plugin {
    let outputFolder: string
    
    return {
        name: "compress-build-artifacts",
        apply: isClientOrientedProductionBuild,
        configResolved: (config) => {
            outputFolder = config.build.outDir
        },
        closeBundle: async () => {
            const outputFiles = await listAllFilesRecursively(outputFolder)
            
            for (const outputFile of outputFiles) {
                if (isCompressible(outputFile)) {
                    await compressFile(outputFile)
                }
            }
        },
    }
}

function isCompressible(fileName: string): boolean {
    return fileName.endsWith(".css")
        || fileName.endsWith(".html")
        || fileName.endsWith(".js")
}

async function compressFile(fileToCompress: string): Promise<void> {
    return new Promise<void>((resolve) => {
        const readStream = createReadStream(fileToCompress)
        const writeStream = createWriteStream(`${fileToCompress}.br`)
        
        const brotli = createBrotliCompress()
        const compressStream = readStream.pipe(brotli).pipe(writeStream)
        compressStream.on("finish", resolve)
    })
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

async function listAllFilesRecursively(
    pathToList: string,
): Promise<ReadonlyArray<string>> {
    const isFile = (await stat(pathToList)).isFile()

    if (isFile) {
        return [pathToList]
    }
    
    const entries = (await readdir(pathToList))
        .map((entry) => joinPath(pathToList, entry))
        .map(listAllFilesRecursively)
    
    return (await Promise.all(entries)).flat()
}
