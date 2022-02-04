import type { ThemeSelection, ThemeCachePort } from "+theme"

export function fakeThemeCachePort(
    restoredThemeSelection: ThemeSelection,
): ThemeCachePort {
    let savedThemeSelection = restoredThemeSelection
    
    return {
        get restoredThemeSelection() {
            return savedThemeSelection
        },
        saveThemeSelection: (themeSelection) => {
            savedThemeSelection = themeSelection
        },
    }
}
