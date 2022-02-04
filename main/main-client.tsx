import { adaptLocaleCachePortToSessionStorage, adaptPreferredLocalePortToNavigatorLanguages } from "+i18n"
import { adaptMediaThemePortToMediaQuery, adaptThemeCachePortToSessionStorage } from "+theme"
import { hydrate } from "preact"
import { App } from "./App"
import "./index.css"

const localeCachePort = adaptLocaleCachePortToSessionStorage()
const mediaThemePort = adaptMediaThemePortToMediaQuery()
const preferredLocalePort = adaptPreferredLocalePortToNavigatorLanguages()
const themeCachePort = adaptThemeCachePortToSessionStorage()

hydrate(
    <App
        localeCachePort={localeCachePort}
        mediaThemePort={mediaThemePort}
        preferredLocalePort={preferredLocalePort}
        themeCachePort={themeCachePort}
    />,
    document.body,
)
