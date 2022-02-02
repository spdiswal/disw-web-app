import { adaptMediaThemeToQuery } from "+theme"
import { mockMediaQuery, raiseFakeMediaQueryChangeEvent } from "../fakes"

const prefersDarkColourSchemeQuery = "(prefers-color-scheme: dark)"

test("The initial media theme is 'dark' when the media prefers a dark colour scheme.", () => {
    // GIVEN that the media prefers a dark colour scheme.
    mockMediaQuery(prefersDarkColourSchemeQuery, true)
    
    // GIVEN a test subject.
    const { initialMediaTheme } = adaptMediaThemeToQuery()
    
    // THEN the initial media theme is 'dark'.
    expect(initialMediaTheme).toBe("dark")
})

test("The initial media theme is 'light' when the media does not prefer a dark colour scheme.", () => {
    // GIVEN that the media does not prefer a dark colour scheme.
    mockMediaQuery(prefersDarkColourSchemeQuery, false)
    
    // GIVEN a test subject.
    const { initialMediaTheme } = adaptMediaThemeToQuery()
    
    // THEN the initial media theme is 'light'.
    expect(initialMediaTheme).toBe("light")
})

test("The media theme adapter invokes the subscribers when the media starts preferring a dark colour scheme.", () => {
    // GIVEN that the media does not prefer a dark colour scheme.
    mockMediaQuery(prefersDarkColourSchemeQuery, false)
    
    // GIVEN a test subject.
    const { subscribeToMediaTheme } = adaptMediaThemeToQuery()
    
    // GIVEN a spying subscriber to the media theme.
    const spyingSubscriber = jest.fn()
    subscribeToMediaTheme(spyingSubscriber)
    
    // WHEN the media starts preferring a dark colour scheme.
    raiseFakeMediaQueryChangeEvent(true)
    
    // THEN the subscriber has been invoked once.
    // AND the new media theme is passed as the argument.
    expect(spyingSubscriber).toHaveBeenCalledTimes(1)
    expect(spyingSubscriber).toHaveBeenCalledWith("dark")
})

test("The media theme adapter invokes the subscribers when the media stops preferring a dark colour scheme.", () => {
    // GIVEN that the media prefers a dark colour scheme.
    mockMediaQuery(prefersDarkColourSchemeQuery, true)
    
    // GIVEN a test subject.
    const { subscribeToMediaTheme } = adaptMediaThemeToQuery()
    
    // GIVEN a spying subscriber to the media theme.
    const spyingSubscriber = jest.fn()
    subscribeToMediaTheme(spyingSubscriber)
    
    // WHEN the media stops preferring a dark colour scheme.
    raiseFakeMediaQueryChangeEvent(false)
    
    // THEN the subscriber has been invoked once.
    // AND the new media theme is passed as the argument.
    expect(spyingSubscriber).toHaveBeenCalledTimes(1)
    expect(spyingSubscriber).toHaveBeenCalledWith("light")
})
