let fakeMediaQueryList: MediaQueryList

export function mockMediaQuery(
    predefinedQuery: string,
    matches: boolean,
): MediaQueryList {
    const changeListeners: Array<EventListenerOrEventListenerObject> = []
    
    fakeMediaQueryList = {
        media: predefinedQuery,
        matches,
        addEventListener: (
            type: string,
            listener: EventListenerOrEventListenerObject,
        ) => {
            if (type === "change") {
                changeListeners.push(listener)
            }
        },
        removeEventListener: (
            type: string,
            listener: EventListenerOrEventListenerObject,
        ) => {
            if (type === "change") {
                changeListeners.splice(changeListeners.indexOf(listener), 1)
            }
        },
        dispatchEvent: (event) => {
            for (const listener of changeListeners) {
                if (typeof listener === "function") {
                    listener(event)
                } else {
                    listener.handleEvent(event)
                }
            }
            return true
        },
        onchange: () => {
            throw new Error("Unexpected 'onchange' call on 'fakeMediaQueryList'.")
        },
        addListener: () => {
            throw new Error("Unexpected 'addListener' call on 'fakeMediaQueryList'.")
        },
        removeListener: () => {
            throw new Error("Unexpected 'removeListener' call on 'fakeMediaQueryList'.")
        },
    }
    
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => {
            if (query === predefinedQuery) {
                return fakeMediaQueryList
            } else {
                throw new Error(`Unexpected media query: ${query}`)
            }
        },
    })
    
    return fakeMediaQueryList
}

export function raiseFakeMediaQueryChangeEvent(matches: boolean) {
    const fakeChangeEvent = {
        ...new Event("change"),
        media: fakeMediaQueryList.media,
        matches,
    }
    
    fakeMediaQueryList.dispatchEvent(fakeChangeEvent)
}
