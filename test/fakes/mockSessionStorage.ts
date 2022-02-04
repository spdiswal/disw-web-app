type StorageEntry = {
    readonly key: string
    readonly value: string
}

export function mockSessionStorage(predefinedEntry: StorageEntry | null) {
    let savedEntry = predefinedEntry
    
    const fakeSessionStorage: Storage = {
        getItem: (key: string) => {
            return savedEntry !== null && savedEntry.key === key
                ? savedEntry.value
                : null
        },
        setItem: (key, value) => {
            savedEntry = { key, value }
        },
        removeItem: (key: string) => {
            if (savedEntry !== null && savedEntry.key === key) {
                savedEntry = null
            }
        },
        get length(): never {
            throw new Error("Unexpected 'length' call on 'fakeSessionStorage'.")
        },
        clear: () => {
            throw new Error("Unexpected 'clear' call on 'fakeSessionStorage'.")
        },
        key: () => {
            throw new Error("Unexpected 'key' call on 'fakeSessionStorage'.")
        },
    }
    
    Object.defineProperty(window, "sessionStorage", {
        writable: true,
        value: fakeSessionStorage,
    })
}

export function sabotageSessionStorage() {
    window.sessionStorage.setItem = () => {
        throw new Error("The 'setItem' function on 'fakeSessionStorage' has been sabotaged.")
    }
}
