import type { MediaThemePort, ThemeCachePort } from "+theme"
import { useCallback, useEffect, useState } from "preact/hooks"
import type { ThemeSelection } from "./models"

type UseThemeProps = {
    readonly mediaThemePort: MediaThemePort
    readonly themeCachePort: ThemeCachePort
}

export function useTheme({
    mediaThemePort: { initialMediaTheme, subscribeToMediaTheme },
    themeCachePort: { restoredThemeSelection, saveThemeSelection },
}: UseThemeProps) {
    const [mediaTheme, setMediaTheme] = useState(initialMediaTheme)
    const [themeSelection, setThemeSelection] = useState(restoredThemeSelection)
    
    useEffect(() => {
        const { unsubscribe } = subscribeToMediaTheme((newMediaTheme) => {
            setMediaTheme(newMediaTheme)
        })
        
        return function cleanUp() {
            unsubscribe()
        }
    }, [])
    
    useEffect(() => {
        const themeToApply = themeSelection === "match-media"
            ? mediaTheme
            : themeSelection
        
        if (themeToApply === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [themeSelection, mediaTheme])
    
    const selectTheme = useCallback((themeToSelect: ThemeSelection) => {
        saveThemeSelection(themeToSelect)
        setThemeSelection(themeToSelect)
    }, [])
    
    return {
        mediaTheme,
        themeSelection,
        selectTheme,
    }
}
