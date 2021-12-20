import { languages } from "+i18n"

test("There are two supported languages.", () => {
    expect(languages).toHaveLength(2)
})

test("Danish is a supported language.", () => {
    expect(languages).toContain("da")
})

test("English is a supported language.", () => {
    expect(languages).toContain("en")
})
