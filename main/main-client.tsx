import { adaptLocaleCachePortToSessionStorage, adaptPreferredLocalePortToNavigatorLanguages } from "+i18n"
import { adaptMediaThemePortToMediaQuery, adaptThemeCachePortToSessionStorage } from "+theme"
import { hydrate } from "preact"
import { App } from "./App"
import "./index.css"

hydrate(
    <App
        localeCachePort={adaptLocaleCachePortToSessionStorage()}
        mediaThemePort={adaptMediaThemePortToMediaQuery()}
        preferredLocalePort={adaptPreferredLocalePortToNavigatorLanguages()}
        themeCachePort={adaptThemeCachePortToSessionStorage()}
    />,
    document.body,
)
