import type { ThemeSelection } from "+theme"

export type ThemeCachePort = {
    readonly restoredThemeSelection: ThemeSelection
    readonly saveThemeSelection: (themeSelection: ThemeSelection) => void
}

export function adaptThemeCachePortToSessionStorage(): ThemeCachePort {
    const sessionStorageKey = "theme"
    
    return {
        get restoredThemeSelection() {
            const item = sessionStorage.getItem(sessionStorageKey)
            return item === "dark" || item === "light" ? item : "match-media"
        },
        saveThemeSelection: (themeSelection) => {
            if (themeSelection !== "match-media") {
                try {
                    sessionStorage.setItem(sessionStorageKey, themeSelection)
                } catch (e) {
                    // Ignored. It is not crucial that the theme selection is saved.
                }
            } else {
                sessionStorage.removeItem(sessionStorageKey)
            }
        },
    }
}

export function dummyThemeCachePort(): ThemeCachePort {
    return {
        restoredThemeSelection: "match-media",
        saveThemeSelection: () => { /* Do nothing. */ },
    }
}
