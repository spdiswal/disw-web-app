import { adaptPreferredLocalePortToNavigatorLanguages } from "+i18n"
import { mockNavigatorLanguages } from "+test/fakes"

test("The preferred locale may fall back to Danish when the browser has no language preferences.", () => {
    // GIVEN that the browser has no language preferences.
    mockNavigatorLanguages([])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})

test("The preferred locale is Danish when the browser prefers 'da-DK' and 'en-GB'.", () => {
    // GIVEN that the browser prefers 'da-DK' and 'en-GB'.
    mockNavigatorLanguages(["da-DK", "en-GB"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})

test("The preferred locale is Danish when the browser prefers 'da', 'en', and 'en-US'.", () => {
    // GIVEN that the browser prefers 'da', 'en', and 'en-US'.
    mockNavigatorLanguages(["da", "en", "en-US"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})

test("The preferred locale is Danish when the browser prefers 'NB-NO', 'SV-SE', and 'DA-DK'.", () => {
    // GIVEN that the browser prefers 'NB-NO', 'SV-SE', and 'DA-DK'.
    mockNavigatorLanguages(["NB-NO", "SV-SE", "DA-DK"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})

test("The preferred locale is English when the browser prefers 'en-GB' and 'da-DK'.", () => {
    // GIVEN that the browser prefers 'en-GB' and 'da-DK'.
    mockNavigatorLanguages(["en-GB", "da-DK"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is English.
    expect(preferredLocale).toBe("en")
})

test("The preferred locale is English when the browser prefers 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.", () => {
    // GIVEN that the browser prefers 'en', 'en-US', 'en-GB', 'da', and 'da-DK'.
    mockNavigatorLanguages(["en", "en-US", "en-GB", "da", "da-DK"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is English.
    expect(preferredLocale).toBe("en")
})

test("The preferred locale is English when the browser prefers 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.", () => {
    // GIVEN that the browser prefers 'IT-IT', 'EN-US', 'ES-ES', and 'PT-PT'.
    mockNavigatorLanguages(["IT-IT", "EN-US", "ES-ES", "PT-PT"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is English.
    expect(preferredLocale).toBe("en")
})

test("The preferred locale may fall back to Danish when the browser prefers 'nb-NO', 'sv-SE', and 'de-DE'.", () => {
    // GIVEN that the browser prefers 'nb-NO', 'sv-SE', and 'de-DE'.
    mockNavigatorLanguages(["nb-NO", "sv-SE", "de-DE"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})

test("The preferred locale may fall back to Danish when the browser prefers 'nl-NL', 'fr-BE', and 'gsw-CH'.", () => {
    // GIVEN that the browser prefers 'nl-NL', 'fr-BE', and 'gsw-CH'.
    mockNavigatorLanguages(["nl-NL", "fr-BE", "gsw-CH"])
    
    // GIVEN a test subject.
    const { preferredLocale } = adaptPreferredLocalePortToNavigatorLanguages()
    
    // THEN the preferred locale is Danish.
    expect(preferredLocale).toBe("da")
})
