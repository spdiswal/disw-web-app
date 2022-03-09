import type { MediaThemePort, Theme, ThemeCachePort, ThemeSelection } from "+theme"
import { useCallback, useEffect, useMemo, useState } from "preact/hooks"

type UseThemeProps = {
    readonly mediaThemePort: MediaThemePort
    readonly themeCachePort: ThemeCachePort
}

export function useThemeSelection({
    mediaThemePort: { initialMediaTheme, subscribeToMediaTheme },
    themeCachePort: { restoredThemeSelection, saveThemeSelection },
}: UseThemeProps) {
    const [mediaTheme, setMediaTheme] = useState(initialMediaTheme)
    const [themeSelection, setThemeSelection] = useState(restoredThemeSelection)
    
    const appliedTheme =
        useMemo<Theme>(() => (
            themeSelection === "match-media" ? mediaTheme : themeSelection
        ), [themeSelection, mediaTheme])
    
    const selectTheme =
        useCallback((themeToSelect: ThemeSelection) => {
            saveThemeSelection(themeToSelect)
            setThemeSelection(themeToSelect)
        }, [])
    
    useEffect(() => {
        const { unsubscribe } = subscribeToMediaTheme((newMediaTheme) => {
            setMediaTheme(newMediaTheme)
        })
        
        return function cleanUp() {
            unsubscribe()
        }
    }, [])
    
    useEffect(() => {
        if (appliedTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [appliedTheme])
    
    return {
        appliedTheme,
        mediaTheme,
        themeSelection,
        selectTheme,
    }
}
