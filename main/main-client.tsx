import { adaptLocaleCachePortToSessionStorage, adaptPreferredLocalePortToNavigatorLanguages } from "+i18n"
import { adaptMediaThemePortToMediaQuery, adaptThemeCachePortToSessionStorage } from "+theme"
import { render } from "preact"
import { App } from "./App"
import "./assets/font/inter.css"
import "./initialise-tailwind.css"
import "./make-visible.css"

render(
    <App
        localeCachePort={adaptLocaleCachePortToSessionStorage()}
        mediaThemePort={adaptMediaThemePortToMediaQuery()}
        preferredLocalePort={adaptPreferredLocalePortToNavigatorLanguages()}
        themeCachePort={adaptThemeCachePortToSessionStorage()}
    />,
    document.body,
)
