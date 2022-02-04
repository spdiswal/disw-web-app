import { dummyPreferredLocalePort, useLocale } from "+i18n"
import { fakeLocaleCachePort, fakePreferredLocalePort } from "+test/fakes"
import { act, renderHook } from "@testing-library/preact-hooks"

test("The locale is 'da' when the restored locale selection is 'match-preferred' and the preferred locale is 'da'.", () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'match-preferred'.
    // GIVEN that the preferred locale is 'da'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("match-preferred"),
        preferredLocalePort: fakePreferredLocalePort("da"),
    }))
    
    // THEN the locale is 'da'.
    // AND the 'lang' attribute of the document is 'da'.
    expect(result.current!.locale).toBe("da") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("da")
})

test("The locale is 'en' when the restored locale selection is 'match-preferred' and the preferred locale is 'en'.", () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'match-preferred'.
    // GIVEN that the preferred locale is 'dena'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("match-preferred"),
        preferredLocalePort: fakePreferredLocalePort("en"),
    }))
    
    // THEN the locale is 'en'.
    // AND the 'lang' attribute of the document is 'en'.
    expect(result.current!.locale).toBe("en") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("en")
})

test("The locale is 'da' when the restored locale selection is 'da'.", () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'da'.
    // GIVEN that the preferred locale is 'en'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("da"),
        preferredLocalePort: fakePreferredLocalePort("en"),
    }))
    
    // THEN the locale is 'da'.
    // AND the 'lang' attribute of the document is 'da'.
    expect(result.current!.locale).toBe("da") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("da")
})

test("The locale is 'en' when the restored locale selection is 'en'.", () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'en'.
    // GIVEN that the preferred locale is 'da'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("en"),
        preferredLocalePort: fakePreferredLocalePort("da"),
    }))
    
    // THEN the locale is 'en'.
    // AND the 'lang' attribute of the document is 'en'.
    expect(result.current!.locale).toBe("en") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("en")
})

test("The locale is 'da' when it is selected.", async () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'match-preferred'.
    // GIVEN that the preferred locale is 'en'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("match-preferred"),
        preferredLocalePort: fakePreferredLocalePort("en"),
    }))
    
    // WHEN selecting the 'da' locale.
    await act(() => {
        result.current!.selectLocale("da") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the locale is 'da'.
    // AND the 'lang' attribute of the document is 'da'.
    expect(result.current!.locale).toBe("da") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("da")
})

test("The locale is 'en' when it is selected.", async () => {
    // GIVEN a test subject.
    // GIVEN that the restored locale selection is 'match-preferred'.
    // GIVEN that the preferred locale is 'da'.
    const { result } = renderHook(() => useLocale({
        localeCachePort: fakeLocaleCachePort("match-preferred"),
        preferredLocalePort: fakePreferredLocalePort("da"),
    }))
    
    // WHEN selecting the 'en' locale.
    await act(() => {
        result.current!.selectLocale("en") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the locale is 'en'.
    // AND the 'lang' attribute of the document is 'en'.
    expect(result.current!.locale).toBe("en") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    expect(document.documentElement.lang).toBe("en")
})

test("The locale cache saves the 'da' locale when it is selected.", async () => {
    // GIVEN that the restored locale selection is 'match-preferred'.
    const localeCachePort = fakeLocaleCachePort("match-preferred")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useLocale({
        localeCachePort,
        preferredLocalePort: dummyPreferredLocalePort(),
    }))
    
    // WHEN selecting the 'da' locale.
    await act(() => {
        result.current!.selectLocale("da") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the locale cache saves the 'da' locale.
    expect(localeCachePort.restoredLocaleSelection).toBe("da")
})

test("The locale cache saves the 'en' locale when it is selected.", async () => {
    // GIVEN that the restored locale selection is 'match-preferred'.
    const localeCachePort = fakeLocaleCachePort("match-preferred")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useLocale({
        localeCachePort,
        preferredLocalePort: dummyPreferredLocalePort(),
    }))
    
    // WHEN selecting the 'en' locale.
    await act(() => {
        result.current!.selectLocale("en") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the locale cache saves the 'en' locale.
    expect(localeCachePort.restoredLocaleSelection).toBe("en")
})
