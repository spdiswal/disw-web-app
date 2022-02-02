import { dummyMediaTheme, useTheme } from "+theme"
import { act, renderHook } from "@testing-library/preact-hooks"
import { fakeMediaTheme, fakeThemeStorage } from "./fakes"

test("The document applies the media theme when the selected theme is 'match-media' and media theme changes from 'dark' to 'light'.", async () => {
    // GIVEN that the media theme is 'dark'.
    const mediaThemePort = fakeMediaTheme("dark")
    
    // GIVEN a test subject.
    // GIVEN that the theme selection is 'match-media'.
    renderHook(() => useTheme({
        mediaThemePort,
        themeStoragePort: fakeThemeStorage("match-media"),
    }))
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement.classList).toContain("dark")
    
    // WHEN the media theme changes to 'light'.
    await act(() => {
        mediaThemePort.changeMediaTheme("light")
    })
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement.classList).not.toContain("dark")
})

test("The document applies the media theme when the selected theme is 'match-media' and media theme changes from 'light' to 'dark'.", async () => {
    // GIVEN that the media theme is 'light'.
    const mediaThemePort = fakeMediaTheme("light")
    
    // GIVEN a test subject.
    // GIVEN that the theme selection is 'match-media'.
    renderHook(() => useTheme({
        mediaThemePort,
        themeStoragePort: fakeThemeStorage("match-media"),
    }))
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement.classList).not.toContain("dark")
    
    // WHEN the media theme changes to 'dark'.
    await act(() => {
        mediaThemePort.changeMediaTheme("dark")
    })
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement.classList).toContain("dark")
})

test("The document applies the selected 'dark' theme.", async () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'light'.
    // GIVEN that the theme selection is 'match-media'.
    const { result } = renderHook(() => useTheme({
        mediaThemePort: fakeMediaTheme("light"),
        themeStoragePort: fakeThemeStorage("match-media"),
    }))
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement.classList).not.toContain("dark")
    
    // WHEN selecting the 'dark' theme.
    await act(() => {
        result.current!.selectTheme("dark") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement.classList).toContain("dark")
})

test("The document applies the selected 'light' theme.", async () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'dark'.
    // GIVEN that the theme selection is 'match-media'.
    const { result } = renderHook(() => useTheme({
        mediaThemePort: fakeMediaTheme("dark"),
        themeStoragePort: fakeThemeStorage("match-media"),
    }))
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement.classList).toContain("dark")
    
    // WHEN selecting the 'light' theme.
    await act(() => {
        result.current!.selectTheme("light") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement.classList).not.toContain("dark")
})

test("The theme storage saves the selected 'dark' theme.", async () => {
    // GIVEN that the theme selection is 'match-media'.
    const themeStoragePort = fakeThemeStorage("match-media")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useTheme({
        mediaThemePort: dummyMediaTheme(),
        themeStoragePort,
    }))
    
    // WHEN selecting the 'dark' theme.
    await act(() => {
        result.current!.selectTheme("dark") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the theme storage saves the 'dark' theme.
    expect(themeStoragePort.restoredThemeSelection).toBe("dark")
})

test("The theme storage saves the selected 'light' theme.", async () => {
    // GIVEN that the theme selection is 'match-media'.
    const themeStoragePort = fakeThemeStorage("match-media")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useTheme({
        mediaThemePort: dummyMediaTheme(),
        themeStoragePort,
    }))
    
    // WHEN selecting the 'light' theme.
    await act(() => {
        result.current!.selectTheme("light") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the theme storage saves the 'light' theme.
    expect(themeStoragePort.restoredThemeSelection).toBe("light")
})

test("The theme storage saves the selected 'match-media' theme.", async () => {
    // GIVEN that the theme selection is 'dark'.
    const themeStoragePort = fakeThemeStorage("dark")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useTheme({
        mediaThemePort: dummyMediaTheme(),
        themeStoragePort,
    }))
    
    // WHEN selecting the 'match-media' theme.
    await act(() => {
        result.current!.selectTheme("match-media") // eslint-disable-line @typescript-eslint/no-non-null-assertion
    })
    
    // THEN the theme storage saves the 'match-media' theme.
    expect(themeStoragePort.restoredThemeSelection).toBe("match-media")
})
