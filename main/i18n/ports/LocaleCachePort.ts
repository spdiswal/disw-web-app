import type { LocaleSelection } from "+i18n"

export type LocaleCachePort = {
    readonly restoredLocaleSelection: LocaleSelection
    readonly saveLocaleSelection: (localeSelection: LocaleSelection) => void
}

export function adaptLocaleCachePortToSessionStorage(): LocaleCachePort {
    const sessionStorageKey = "locale"
    
    return {
        get restoredLocaleSelection() {
            const item = sessionStorage.getItem(sessionStorageKey)
            return item === "da" || item === "en" ? item : "match-preferred"
        },
        saveLocaleSelection: (localeSelection) => {
            if (localeSelection !== "match-preferred") {
                try {
                    sessionStorage.setItem(sessionStorageKey, localeSelection)
                } catch (e) {
                    // Ignored. It is not crucial that the locale selection is saved.
                }
            } else {
                sessionStorage.removeItem(sessionStorageKey)
            }
        },
    }
}

export function dummyLocaleCachePort(): LocaleCachePort {
    return {
        restoredLocaleSelection: "match-preferred",
        saveLocaleSelection: () => { /* Do nothing. */ },
    }
}
