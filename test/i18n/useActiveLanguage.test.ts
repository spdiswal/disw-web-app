import type { Language, UseActiveLanguageHook, UseActiveLanguageOptions } from "+i18n"
import { useActiveLanguage } from "+i18n"
import { act, renderHook } from "@testing-library/preact-hooks"

test("The 'lang' attribute of the document may be 'da' initially.", () => {
    // GIVEN that the initial language is Danish.
    givenAUseActiveLanguageHook({ initialLanguage: "da" })
    
    // THEN the 'lang' attribute of the document is 'da'.
    expect(document.documentElement.lang).toBe("da")
})

test("The 'lang' attribute of the document may be 'en' initially.", () => {
    // GIVEN that the initial language is English.
    givenAUseActiveLanguageHook({ initialLanguage: "en" })
    
    // THEN the 'lang' attribute of the document is 'en'.
    expect(document.documentElement.lang).toBe("en")
})

test("The 'lang' attribute of the document may change to 'en'.", async () => {
    // GIVEN that the initial language is Danish.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "da" })
    
    // WHEN setting the active language to English.
    await whenSettingTheActiveLanguage(subject, "en")
    
    // THEN the 'lang' attribute of the document is 'en'.
    expect(document.documentElement.lang).toBe("en")
})

test("The 'lang' attribute of the document may change to 'da'.", async () => {
    // GIVEN that the initial language is English.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "en" })
    
    // WHEN setting the active language to Danish.
    await whenSettingTheActiveLanguage(subject, "da")
    
    // THEN the 'lang' attribute of the document is 'da'.
    expect(document.documentElement.lang).toBe("da")
})

function givenAUseActiveLanguageHook(
    options: UseActiveLanguageOptions,
): UseActiveLanguageHook {
    const { result } = renderHook(() => useActiveLanguage(options))
    
    expect(result.current).toBeDefined()
    return result.current! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

async function whenSettingTheActiveLanguage(
    subject: UseActiveLanguageHook,
    activeLanguage: Language,
) {
    await act(() => {
        subject.setActiveLanguage(activeLanguage)
    })
}
