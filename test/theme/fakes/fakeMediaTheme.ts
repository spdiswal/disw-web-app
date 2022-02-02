import type { MediaThemePort, MediaThemeSubscriber, Theme } from "+theme"

type FakeMediaThemePort = MediaThemePort & {
    readonly changeMediaTheme: (newMediaTheme: Theme) => void
}

export function fakeMediaTheme(
    initialMediaTheme: Theme,
): FakeMediaThemePort {
    const subscribers: Array<MediaThemeSubscriber> = []
    
    return {
        initialMediaTheme,
        subscribeToMediaTheme: (subscriber) => {
            subscribers.push(subscriber)
            
            return {
                unsubscribe: () => {
                    subscribers.splice(subscribers.indexOf(subscriber), 1)
                },
            }
        },
        changeMediaTheme: (newMediaTheme) => {
            for (const subscriber of subscribers) {
                subscriber(newMediaTheme)
            }
        },
    }
}
