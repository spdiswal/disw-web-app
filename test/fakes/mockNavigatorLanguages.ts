export function mockNavigatorLanguages(languageCodes: ReadonlyArray<string>) {
    Object.defineProperty(window.navigator, "languages", {
        writable: true,
        value: languageCodes,
    })
}
