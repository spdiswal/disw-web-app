import type { ThemeSelection } from "+theme"

export type ThemeStoragePort = {
    readonly restoredThemeSelection: ThemeSelection
    readonly saveThemeSelection: (themeSelection: ThemeSelection) => void
}

export function adaptThemeStorageToSessionStorage(): ThemeStoragePort {
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

export function dummyThemeStorage(): ThemeStoragePort {
    return {
        restoredThemeSelection: "match-media",
        saveThemeSelection: () => { /* Do nothing. */ },
    }
}
