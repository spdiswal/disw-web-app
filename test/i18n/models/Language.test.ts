import { supportedLanguages } from "+i18n"

test("There are two supported languages.", () => {
    expect(supportedLanguages).toHaveLength(2)
})

test("Danish is a supported language.", () => {
    expect(supportedLanguages).toContain("da")
})

test("English is a supported language.", () => {
    expect(supportedLanguages).toContain("en")
})
