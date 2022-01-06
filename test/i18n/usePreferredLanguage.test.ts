import type { UsePreferredLanguageHook, UsePreferredLanguageOptions } from "+i18n"
import { usePreferredLanguage } from "+i18n"
import { renderHook } from "@testing-library/preact-hooks"

let substitutedPreferredLanguages: jest.SpyInstance<ReadonlyArray<string>>

beforeEach(() => {
    substitutedPreferredLanguages =
        jest.spyOn(window.navigator, "languages", "get")
})

afterEach(() => {
    substitutedPreferredLanguages.mockRestore()
})

test("The preferred language may fall back to Danish when there are no preferred languages.", () => {
    // GIVEN that there are no preferred languages.
    substitutedPreferredLanguages.mockReturnValue([])
    
    // GIVEN that the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "da" })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language may fall back to English when there are no preferred languages.", () => {
    // GIVEN that there are no preferred languages.
    substitutedPreferredLanguages.mockReturnValue([])
    
    // GIVEN that the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "en" })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is Danish when the preferred languages are 'da-DK' and 'en-GB'.", () => {
    // GIVEN that the preferred languages are 'da-DK' and 'en-GB'.
    substitutedPreferredLanguages.mockReturnValue(["da-DK", "en-GB"])
    
    // GIVEN that the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "en" })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is Danish when the preferred languages are 'da', 'en', and 'en-US'.", () => {
    // GIVEN that the preferred languages are 'da', 'en', and 'en-US'.
    substitutedPreferredLanguages.mockReturnValue(["da", "en", "en-US"])
    
    // GIVEN that the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "en" })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is Danish when the preferred languages are 'NB-NO', 'SV-SE', and 'DA-DK'.", () => {
    // GIVEN that the preferred languages are 'NB-NO', 'SV-SE', and 'DA-DK'.
    substitutedPreferredLanguages.mockReturnValue(["NB-NO", "SV-SE", "DA-DK"])
    
    // GIVEN that the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "en" })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is English when the preferred languages are 'en-GB' and 'da-DK'.", () => {
    // GIVEN that the preferred languages are 'en-GB' and 'da-DK'.
    substitutedPreferredLanguages.mockReturnValue(["en-GB", "da-DK"])
    
    // GIVEN that the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "da" })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is English when the preferred languages are 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.", () => {
    // GIVEN that the preferred languages are 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.
    substitutedPreferredLanguages.mockReturnValue(["en", "en-US", "en-GB", "da", "da-DK"])
    
    // GIVEN that the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "da" })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is English when the preferred languages are 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.", () => {
    // GIVEN that the preferred languages are 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.
    substitutedPreferredLanguages.mockReturnValue(["IT-IT", "EN-US", "ES-ES", "PT-PT"])
    
    // GIVEN that the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "da" })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language may fall back to Danish when the preferred languages are 'nb-NO', 'sv-SE', and 'de-DE'.", () => {
    // GIVEN that the preferred languages are 'nb-NO', 'sv-SE', and 'de-DE'.
    substitutedPreferredLanguages.mockReturnValue(["nb-NO", "sv-SE", "de-DE"])
    
    // GIVEN that the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "da" })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language may fall back to English when the preferred languages are 'nl-NL', 'fr-BE', and 'gsw-CH'.", () => {
    // GIVEN that the preferred languages are 'nl-NL', 'fr-BE', and 'gsw-CH'.
    substitutedPreferredLanguages.mockReturnValue(["nl-NL", "fr-BE", "gsw-CH"])
    
    // GIVEN that the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({ fallbackLanguage: "en" })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

function givenAUsePreferredLanguageHook(
    options: UsePreferredLanguageOptions,
): UsePreferredLanguageHook {
    const { result } = renderHook(() => usePreferredLanguage(options))
    
    expect(result.current).toBeDefined()
    return result.current! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}
