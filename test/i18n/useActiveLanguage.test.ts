import type { Language, UseActiveLanguageHook } from "+i18n"
import { useActiveLanguage } from "+i18n"
import { act, renderHook } from "@testing-library/preact-hooks"

test("The 'lang' attribute of the document may change from Danish to English.", async () => {
    // GIVEN that the initial language is Danish.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "da" })
    
    // WHEN setting the active language to English.
    await whenSettingTheActiveLanguage(subject, "en")
    
    // THEN the 'lang' attribute of the document is 'en'.
    expect(document.documentElement.lang).toBe("en")
})

test("The 'lang' attribute of the document may change from English to Danish.", async () => {
    // GIVEN that the initial language is English.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "en" })
    
    // WHEN setting the active language to Danish.
    await whenSettingTheActiveLanguage(subject, "da")
    
    // THEN the 'lang' attribute of the document is 'da'.
    expect(document.documentElement.lang).toBe("da")
})

function givenAUseActiveLanguageHook(options?: {
    initialLanguage?: Language
}): UseActiveLanguageHook {
    const initialLanguage = options?.initialLanguage ?? "en"
    const { result } = renderHook(() => useActiveLanguage(initialLanguage))
    
    expect(result.current).toBeDefined()
    expect(document.documentElement.lang).toBe(initialLanguage)
    
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
