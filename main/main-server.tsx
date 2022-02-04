import { dummyLocaleCachePort, dummyPreferredLocalePort } from "+i18n"
import { content } from "+profile/content/predefined"
import { dummyMediaThemePort, dummyThemeCachePort } from "+theme"
import { renderToString } from "preact-render-to-string"
import type { TailwindColorGroup, TailwindConfig } from "tailwindcss/tailwind-config"
import { App } from "./App"

const app = (
    <App
        localeCachePort={dummyLocaleCachePort()}
        mediaThemePort={dummyMediaThemePort()}
        preferredLocalePort={dummyPreferredLocalePort()}
        themeCachePort={dummyThemeCachePort()}
    />
)

export type SubstituteHtmlFragmentsOptions = {
    readonly indentBody: boolean
    readonly tailwindConfig: TailwindConfig
}

/**
 * Dynamically imported by `vite.config.ts` when pre-rendering `index.html`.
 */
export function substituteHtmlFragments(
    templateHtml: string,
    { indentBody, tailwindConfig }: SubstituteHtmlFragmentsOptions,
): string {
    // The TypeScript and ESLint warnings must be suppressed because the static
    // type of the Tailwind CSS configuration does not expose custom colour
    // groups such as `neutral`.
    const tailwindNeutralColourGroup: TailwindColorGroup = // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tailwindConfig.theme.colors.neutral
    
    const fragmentsToSubstitute = [
        {
            placeholderToReplace: "/* [main-server.tsx fragment: tailwind-bg-neutral-50] */",
            fragmentToInsert: `background-color: ${tailwindNeutralColourGroup["50"]};`,
        },
        {
            placeholderToReplace: "/* [main-server.tsx fragment: tailwind-bg-neutral-900] */",
            fragmentToInsert: `background-color: ${tailwindNeutralColourGroup["900"]};`,
        },
        {
            placeholderToReplace: "<title>DISW Web App</title> <!-- [main-server.tsx fragment: title] -->",
            fragmentToInsert: `<title>${content.identity.name}</title>`,
        },
        {
            placeholderToReplace: "<!-- [main-server.tsx fragment: body] -->",
            fragmentToInsert: renderToString(
                app,
                {},
                { pretty: indentBody },
            ),
        },
    ]
    
    return fragmentsToSubstitute.reduce(
        (resultHtml, { placeholderToReplace, fragmentToInsert }) => {
            return resultHtml.replace(placeholderToReplace, fragmentToInsert)
        },
        templateHtml,
    )
}
