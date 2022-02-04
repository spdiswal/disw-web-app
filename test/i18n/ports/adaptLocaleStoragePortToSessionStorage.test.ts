import { adaptLocaleCachePortToSessionStorage } from "+i18n"
import { mockSessionStorage, sabotageSessionStorage } from "+test/fakes"

test("The restored locale selection is 'match-preferred' when the session storage is empty.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { restoredLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // THEN the restored locale selection is 'match-preferred'.
    expect(restoredLocaleSelection).toBe("match-preferred")
})

test("The restored locale selection is 'da' when the session storage has a 'locale' entry with a value of 'da'.", () => {
    // GIVEN that the session storage has a 'locale' entry with a value of 'da'.
    mockSessionStorage({ key: "locale", value: "da" })
    
    // GIVEN a test subject.
    const { restoredLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // THEN the restored locale selection is 'da'.
    expect(restoredLocaleSelection).toBe("da")
})

test("The restored locale selection is 'en' when the session storage has a 'locale' entry with a value of 'en'.", () => {
    // GIVEN that the session storage has a 'locale' entry with a value of 'en'.
    mockSessionStorage({ key: "locale", value: "en" })
    
    // GIVEN a test subject.
    const { restoredLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // THEN the restored locale selection is 'en'.
    expect(restoredLocaleSelection).toBe("en")
})

test("The restored locale selection is 'match-preferred' when the session storage has a 'locale' entry with an arbitrary value.", () => {
    // GIVEN that the session storage has a 'locale' entry with an arbitrary value.
    mockSessionStorage({ key: "locale", value: "a wish upon a star" })
    
    // GIVEN a test subject.
    const { restoredLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // THEN the restored locale selection is 'match-preferred'.
    expect(restoredLocaleSelection).toBe("match-preferred")
})

test("The session storage has a 'locale' entry with a value of 'da' upon saving a 'da' locale selection.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { saveLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // WHEN saving a 'da' locale selection.
    saveLocaleSelection("da")
    
    // THEN the session storage has a 'locale' entry with a value of 'da'.
    expect(sessionStorage.getItem("locale")).toBe("da")
})

test("The session storage has a 'locale' entry with a value of 'en' upon saving a 'en' locale selection.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { saveLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // WHEN saving a 'en' locale selection.
    saveLocaleSelection("en")
    
    // THEN the session storage has a 'locale' entry with a value of 'en'.
    expect(sessionStorage.getItem("locale")).toBe("en")
})

test("The session storage becomes empty upon saving a 'match-preferred' locale selection.", () => {
    // GIVEN that the session storage has a 'locale' entry with a value of 'en'.
    mockSessionStorage({ key: "locale", value: "en" })
    
    // GIVEN a test subject.
    const { saveLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // WHEN saving a 'match-preferred' locale selection.
    saveLocaleSelection("match-preferred")
    
    // THEN the session storage is empty.
    expect(sessionStorage.getItem("locale")).toBeNull()
})

test("The session storage is unchanged when it fails to save the locale selection.", () => {
    // GIVEN that the session storage has a 'locale' entry with a value of 'en'.
    mockSessionStorage({ key: "locale", value: "en" })
    
    // GIVEN that the session storage is sabotaged.
    sabotageSessionStorage()
    
    // GIVEN a test subject.
    const { saveLocaleSelection } = adaptLocaleCachePortToSessionStorage()
    
    // WHEN trying to save a 'da' locale selection.
    saveLocaleSelection("da")
    
    // THEN the session storage keeps having a 'locale' entry with a value of 'en'.
    expect(sessionStorage.getItem("locale")).toBe("en")
})
