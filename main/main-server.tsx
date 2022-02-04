import { dummyLocaleCachePort, dummyPreferredLocalePort } from "+i18n"
import { content } from "+profile/content/predefined"
import { dummyMediaThemePort, dummyThemeCachePort } from "+theme"
import { renderToString } from "preact-render-to-string"
import { App } from "./App"

const localeCachePort = dummyLocaleCachePort()
const mediaThemePort = dummyMediaThemePort()
const preferredLocalePort = dummyPreferredLocalePort()
const themeCachePort = dummyThemeCachePort()

// Dynamically imported by `vite.config.ts` when pre-rendering `index.html`.
export const title = `<title>${content.identity.name}</title>`
export const body = renderToString(
    <App
        localeCachePort={localeCachePort}
        mediaThemePort={mediaThemePort}
        preferredLocalePort={preferredLocalePort}
        themeCachePort={themeCachePort}
    />,
)
