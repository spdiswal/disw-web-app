import type { ThemeSelection, ThemeStoragePort } from "+theme"

export function fakeThemeStorage(
    restoredThemeSelection: ThemeSelection,
): ThemeStoragePort {
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
