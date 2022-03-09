import type { Theme } from "+theme"

export const defaultTheme: Theme = "light"

export type MediaThemePort = {
    readonly initialMediaTheme: Theme
    readonly subscribeToMediaTheme:
        (subscriber: MediaThemeSubscriber) => MediaThemeSubscription
}

export type MediaThemeSubscriber = (newMediaTheme: Theme) => void
export type MediaThemeSubscription = {
    readonly unsubscribe: () => void
}

export function adaptMediaThemePortToMediaQuery(): MediaThemePort {
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

export function dummyMediaThemePort(): MediaThemePort {
    return {
        initialMediaTheme: defaultTheme,
        subscribeToMediaTheme: () => ({
            unsubscribe: () => { /* Do nothing. */ },
        }),
    }
}
