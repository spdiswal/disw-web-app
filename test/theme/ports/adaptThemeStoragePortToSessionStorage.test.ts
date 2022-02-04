import { adaptThemeCachePortToSessionStorage } from "+theme"
import { mockSessionStorage, sabotageSessionStorage } from "+test/fakes"

test("The restored theme selection is 'match-media' when the session storage is empty.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { restoredThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // THEN the restored theme selection is 'match-media'.
    expect(restoredThemeSelection).toBe("match-media")
})

test("The restored theme selection is 'dark' when the session storage has a 'theme' entry with a value of 'dark'.", () => {
    // GIVEN that the session storage has a 'theme' entry with a value of 'dark'.
    mockSessionStorage({ key: "theme", value: "dark" })
    
    // GIVEN a test subject.
    const { restoredThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // THEN the restored theme selection is 'dark'.
    expect(restoredThemeSelection).toBe("dark")
})

test("The restored theme selection is 'light' when the session storage has a 'theme' entry with a value of 'light'.", () => {
    // GIVEN that the session storage has a 'theme' entry with a value of 'light'.
    mockSessionStorage({ key: "theme", value: "light" })
    
    // GIVEN a test subject.
    const { restoredThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // THEN the restored theme selection is 'light'.
    expect(restoredThemeSelection).toBe("light")
})

test("The restored theme selection is 'match-media' when the session storage has a 'theme' entry with an arbitrary value.", () => {
    // GIVEN that the session storage has a 'theme' entry with an arbitrary value.
    mockSessionStorage({ key: "theme", value: "a wish upon a star" })
    
    // GIVEN a test subject.
    const { restoredThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // THEN the restored theme selection is 'match-media'.
    expect(restoredThemeSelection).toBe("match-media")
})

test("The session storage has a 'theme' entry with a value of 'dark' upon saving a 'dark' theme selection.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { saveThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // WHEN saving a 'dark' theme selection.
    saveThemeSelection("dark")
    
    // THEN the session storage has a 'theme' entry with a value of 'dark'.
    expect(sessionStorage.getItem("theme")).toBe("dark")
})

test("The session storage has a 'theme' entry with a value of 'light' upon saving a 'light' theme selection.", () => {
    // GIVEN that the session storage is empty.
    mockSessionStorage(null)
    
    // GIVEN a test subject.
    const { saveThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // WHEN saving a 'light' theme selection.
    saveThemeSelection("light")
    
    // THEN the session storage has a 'theme' entry with a value of 'light'.
    expect(sessionStorage.getItem("theme")).toBe("light")
})

test("The session storage becomes empty upon saving a 'match-media' theme selection.", () => {
    // GIVEN that the session storage has a 'theme' entry with a value of 'light'.
    mockSessionStorage({ key: "theme", value: "light" })
    
    // GIVEN a test subject.
    const { saveThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // WHEN saving a 'match-media' theme selection.
    saveThemeSelection("match-media")
    
    // THEN the session storage is empty.
    expect(sessionStorage.getItem("theme")).toBeNull()
})

test("The session storage is unchanged when it fails to save the theme selection.", () => {
    // GIVEN that the session storage has a 'theme' entry with a value of 'light'.
    mockSessionStorage({ key: "theme", value: "light" })
    
    // GIVEN that the session storage is sabotaged.
    sabotageSessionStorage()
    
    // GIVEN a test subject.
    const { saveThemeSelection } = adaptThemeCachePortToSessionStorage()
    
    // WHEN trying to save a 'dark' theme selection.
    saveThemeSelection("dark")
    
    // THEN the session storage keeps having a 'theme' entry with a value of 'light'.
    expect(sessionStorage.getItem("theme")).toBe("light")
})
