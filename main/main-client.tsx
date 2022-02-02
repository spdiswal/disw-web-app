import { adaptPreferredLanguageToNavigator } from "+i18n"
import { adaptMediaThemeToQuery, adaptThemeStorageToSessionStorage } from "+theme"
import { hydrate } from "preact"
import { App } from "./App"
import "./index.css"

const preferredLanguagePort = adaptPreferredLanguageToNavigator()
const mediaThemePort = adaptMediaThemeToQuery()
const themeStoragePort = adaptThemeStorageToSessionStorage()

hydrate(
    <App
        preferredLanguagePort={preferredLanguagePort}
        mediaThemePort={mediaThemePort}
        themeStoragePort={themeStoragePort}
    />,
    document.body,
)
