import type { Language, UseActiveLanguageHook, UseActiveLanguageOptions } from "+i18n"
import { useActiveLanguage } from "+i18n"
import { act, renderHook } from "@testing-library/preact-hooks"

test("The active language may be Danish initially.", () => {
    // GIVEN that the initial language is Danish.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "da" })
    
    // THEN the active language is Danish.
    expect(subject.activeLanguage).toBe("da")
    
    // AND the 'lang' attribute of the document is 'da'.
    expect(document.documentElement.lang).toBe("da")
})

test("The active language may be English initially.", () => {
    // GIVEN that the initial language is English.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "en" })
    
    // THEN the active language is English.
    expect(subject.activeLanguage).toBe("en")
    
    // AND the 'lang' attribute of the document is 'en'.
    expect(document.documentElement.lang).toBe("en")
})

test("The active language may change from Danish to English.", async () => {
    // GIVEN that the initial language is Danish.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "da" })
    
    // WHEN setting the active language to English.
    await whenSettingTheActiveLanguage(subject, "en")
    
    // THEN the active language is English.
    expect(subject.activeLanguage).toBe("en")
    
    // AND the 'lang' attribute of the document is 'en'.
    expect(document.documentElement.lang).toBe("en")
})

test("The active language may change from English to Danish.", async () => {
    // GIVEN that the initial language is English.
    const subject = givenAUseActiveLanguageHook({ initialLanguage: "en" })
    
    // WHEN setting the active language to Danish.
    await whenSettingTheActiveLanguage(subject, "da")
    
    // THEN the active language is Danish.
    expect(subject.activeLanguage).toBe("da")
    
    // AND the 'lang' attribute of the document is 'da'.
    expect(document.documentElement.lang).toBe("da")
})

function givenAUseActiveLanguageHook(
    options: UseActiveLanguageOptions,
): UseActiveLanguageHook {
    const { result } = renderHook(() => useActiveLanguage(options))
    
    // Returns a proxy object that may access the state of the hook instance
    // at any point during the unit test.
    // `result.current` is mutable and would provide only a snapshot of the
    // hook state if returned directly.
    return {
        get activeLanguage() {
            expect(result.current).toBeDefined()
            return result.current!.activeLanguage // eslint-disable-line @typescript-eslint/no-non-null-assertion
        },
        setActiveLanguage: (value) => {
            expect(result.current).toBeDefined()
            result.current!.setActiveLanguage(value) // eslint-disable-line @typescript-eslint/no-non-null-assertion
        },
    }
}

async function whenSettingTheActiveLanguage(
    subject: UseActiveLanguageHook,
    activeLanguage: Language,
) {
    await act(() => {
        subject.setActiveLanguage(activeLanguage)
    })
}
