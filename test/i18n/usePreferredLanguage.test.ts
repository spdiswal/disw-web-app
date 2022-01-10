import type { UsePreferredLanguageHook, UsePreferredLanguageOptions } from "+i18n"
import { usePreferredLanguage } from "+i18n"
import { renderHook } from "@testing-library/preact-hooks"

test("The preferred language may fall back to Danish when there are no preferred languages.", () => {
    // GIVEN that there are no preferred languages.
    // AND the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: [],
        fallbackLanguage: "da",
    })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language may fall back to English when there are no preferred languages.", () => {
    // GIVEN that there are no preferred languages.
    // AND the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: [],
        fallbackLanguage: "en",
    })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is Danish when the preferred languages are 'da-DK' and 'en-GB'.", () => {
    // GIVEN that the preferred languages are 'da-DK' and 'en-GB'.
    // AND the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["da-DK", "en-GB"],
        fallbackLanguage: "en",
    })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is Danish when the preferred languages are 'da', 'en', and 'en-US'.", () => {
    // GIVEN that the preferred languages are 'da', 'en', and 'en-US'.
    // AND the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["da", "en", "en-US"],
        fallbackLanguage: "en",
    })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is Danish when the preferred languages are 'NB-NO', 'SV-SE', and 'DA-DK'.", () => {
    // GIVEN that the preferred languages are 'NB-NO', 'SV-SE', and 'DA-DK'.
    // AND the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["NB-NO", "SV-SE", "DA-DK"],
        fallbackLanguage: "en",
    })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language is English when the preferred languages are 'en-GB' and 'da-DK'.", () => {
    // GIVEN that the preferred languages are 'en-GB' and 'da-DK'.
    // AND the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["en-GB", "da-DK"],
        fallbackLanguage: "da",
    })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is English when the preferred languages are 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.", () => {
    // GIVEN that the preferred languages are 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.
    // AND the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["en", "en-US", "en-GB", "da", "da-DK"],
        fallbackLanguage: "da",
    })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language is English when the preferred languages are 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.", () => {
    // GIVEN that the preferred languages are 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.
    // AND the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["IT-IT", "EN-US", "ES-ES", "PT-PT"],
        fallbackLanguage: "da",
    })
    
    // THEN the preferred language is English.
    expect(subject.preferredLanguage).toBe("en")
})

test("The preferred language may fall back to Danish when the preferred languages are 'nb-NO', 'sv-SE', and 'de-DE'.", () => {
    // GIVEN that the preferred languages are 'nb-NO', 'sv-SE', and 'de-DE'.
    // AND the fallback language is Danish.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["nb-NO", "sv-SE", "de-DE"],
        fallbackLanguage: "da",
    })
    
    // THEN the preferred language is Danish.
    expect(subject.preferredLanguage).toBe("da")
})

test("The preferred language may fall back to English when the preferred languages are 'nl-NL', 'fr-BE', and 'gsw-CH'.", () => {
    // GIVEN that the preferred languages are 'nl-NL', 'fr-BE', and 'gsw-CH'.
    // AND the fallback language is English.
    const subject = givenAUsePreferredLanguageHook({
        languagesOrderedByPreference: ["nl-NL", "fr-BE", "gsw-CH"],
        fallbackLanguage: "en",
    })
    
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
