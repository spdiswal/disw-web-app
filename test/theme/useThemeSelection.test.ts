/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { fakeMediaThemePort, fakeThemeCachePort } from "+test/fakes"
import { dummyMediaThemePort, useThemeSelection } from "+theme"
import { act, renderHook } from "@testing-library/preact-hooks"

test("The document applies the 'dark' theme when the restored theme selection is 'match-media' and the media theme is 'dark'.", () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'dark'.
    // GIVEN that the restored theme selection is 'match-media'.
    renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("dark"),
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement).toHaveClass("dark")
})

test("The document applies the 'light' theme when the restored theme selection is 'match-media' and the media theme is 'light'.", () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'light'.
    // GIVEN that the restored theme selection is 'match-media'.
    renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("light"),
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement).not.toHaveClass("dark")
})

test("The document applies the 'light' media theme when the restored theme selection is 'match-media' and media theme changes from 'dark' to 'light'.", async () => {
    // GIVEN that the media theme is 'dark'.
    const mediaThemePort = fakeMediaThemePort("dark")
    
    // GIVEN a test subject.
    // GIVEN that the restored theme selection is 'match-media'.
    renderHook(() => useThemeSelection({
        mediaThemePort,
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // WHEN the media theme changes to 'light'.
    await act(() => {
        mediaThemePort.changeMediaTheme("light")
    })
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement).not.toHaveClass("dark")
})

test("The document applies the 'dark' theme when the restored theme selection is 'match-media' and media theme changes from 'light' to 'dark'.", async () => {
    // GIVEN that the media theme is 'light'.
    const mediaThemePort = fakeMediaThemePort("light")
    
    // GIVEN a test subject.
    // GIVEN that the restored theme selection is 'match-media'.
    renderHook(() => useThemeSelection({
        mediaThemePort,
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // WHEN the media theme changes to 'dark'.
    await act(() => {
        mediaThemePort.changeMediaTheme("dark")
    })
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement).toHaveClass("dark")
})

test("The document applies the 'dark' theme when the restored theme selection is 'dark'.", () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'light'.
    // GIVEN that the theme selection is 'dark'.
    renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("light"),
        themeCachePort: fakeThemeCachePort("dark"),
    }))
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement).toHaveClass("dark")
})

test("The document applies the 'light' theme when the restored theme selection is 'light'.", () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'dark'.
    // GIVEN that the theme selection is 'light'.
    renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("dark"),
        themeCachePort: fakeThemeCachePort("light"),
    }))
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement).not.toHaveClass("dark")
})

test("The document applies the 'dark' theme when it is selected.", async () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'light'.
    // GIVEN that the theme selection is 'match-media'.
    const { result } = renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("light"),
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // WHEN selecting the 'dark' theme.
    await act(() => {
        result.current!.selectTheme("dark")
    })
    
    // THEN the document applies the 'dark' theme.
    expect(document.documentElement).toHaveClass("dark")
})

test("The document applies the 'light' theme when it is selected.", async () => {
    // GIVEN a test subject.
    // GIVEN that the media theme is 'dark'.
    // GIVEN that the theme selection is 'match-media'.
    const { result } = renderHook(() => useThemeSelection({
        mediaThemePort: fakeMediaThemePort("dark"),
        themeCachePort: fakeThemeCachePort("match-media"),
    }))
    
    // WHEN selecting the 'light' theme.
    await act(() => {
        result.current!.selectTheme("light")
    })
    
    // THEN the document applies the 'light' theme.
    expect(document.documentElement).not.toHaveClass("dark")
})

test("The theme cache saves the 'dark' theme when it is selected.", async () => {
    // GIVEN that the theme selection is 'match-media'.
    const themeCachePort = fakeThemeCachePort("match-media")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useThemeSelection({
        mediaThemePort: dummyMediaThemePort(),
        themeCachePort,
    }))
    
    // WHEN selecting the 'dark' theme.
    await act(() => {
        result.current!.selectTheme("dark")
    })
    
    // THEN the theme cache saves the 'dark' theme.
    expect(themeCachePort.restoredThemeSelection).toBe("dark")
})

test("The theme cache saves the 'light' theme when it is selected.", async () => {
    // GIVEN that the theme selection is 'match-media'.
    const themeCachePort = fakeThemeCachePort("match-media")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useThemeSelection({
        mediaThemePort: dummyMediaThemePort(),
        themeCachePort,
    }))
    
    // WHEN selecting the 'light' theme.
    await act(() => {
        result.current!.selectTheme("light")
    })
    
    // THEN the theme cache saves the 'light' theme.
    expect(themeCachePort.restoredThemeSelection).toBe("light")
})

test("The theme cache saves the 'match-media' theme when it is selected.", async () => {
    // GIVEN that the theme selection is 'dark'.
    const themeCachePort = fakeThemeCachePort("dark")
    
    // GIVEN a test subject.
    const { result } = renderHook(() => useThemeSelection({
        mediaThemePort: dummyMediaThemePort(),
        themeCachePort,
    }))
    
    // WHEN selecting the 'match-media' theme.
    await act(() => {
        result.current!.selectTheme("match-media")
    })
    
    // THEN the theme cache saves the 'match-media' theme.
    expect(themeCachePort.restoredThemeSelection).toBe("match-media")
})
