import { dummyPreferredLanguage } from "+i18n"
import { content } from "+profile/content/predefined"
import { dummyMediaTheme, dummyThemeStorage } from "+theme"
import { renderToString } from "preact-render-to-string"
import { App } from "./App"

const preferredLanguagePort = dummyPreferredLanguage()
const mediaThemePort = dummyMediaTheme()
const themeStoragePort = dummyThemeStorage()

// Dynamically imported by `vite.config.ts` when pre-rendering `index.html`.
export const title = `<title>${content.identity.name}</title>`
export const body = renderToString(
    <App
        preferredLanguagePort={preferredLanguagePort}
        mediaThemePort={mediaThemePort}
        themeStoragePort={themeStoragePort}
    />,
)
