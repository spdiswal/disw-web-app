import type { LocaleSelection, LocaleCachePort } from "+i18n"

export function fakeLocaleCachePort(
    restoredLocaleSelection: LocaleSelection,
): LocaleCachePort {
    let savedLocaleSelection = restoredLocaleSelection
    
    return {
        get restoredLocaleSelection() {
            return savedLocaleSelection
        },
        saveLocaleSelection: (localeSelection) => {
            savedLocaleSelection = localeSelection
        },
    }
}
