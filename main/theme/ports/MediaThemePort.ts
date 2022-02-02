import type { Theme } from "+theme"

export type MediaThemePort = {
    readonly initialMediaTheme: Theme
    readonly subscribeToMediaTheme:
        (subscriber: MediaThemeSubscriber) => MediaThemeSubscription
}

export type MediaThemeSubscriber = (newMediaTheme: Theme) => void
export type MediaThemeSubscription = {
    readonly unsubscribe: () => void
}

export function adaptMediaThemeToQuery(): MediaThemePort {
    const mediaQuery = "(prefers-color-scheme: dark)"
    const matchResult = window.matchMedia(mediaQuery)
    const initialMediaTheme = toTheme(matchResult.matches)
    
    return {
        initialMediaTheme,
        subscribeToMediaTheme: (subscriber) => {
            const handleEvent = ({ matches }: MediaQueryListEvent) => {
                subscriber(toTheme(matches))
            }
            
            matchResult.addEventListener("change", handleEvent)
            
            return {
                unsubscribe: () => {
                    matchResult.removeEventListener("change", handleEvent)
                },
            }
        },
    }
    
    function toTheme(prefersDarkColourScheme: boolean): Theme {
        return prefersDarkColourScheme ? "dark" : "light"
    }
}

export function dummyMediaTheme(): MediaThemePort {
    return {
        initialMediaTheme: "light",
        subscribeToMediaTheme: () => ({
            unsubscribe: () => { /* Do nothing. */ },
        }),
    }
}
