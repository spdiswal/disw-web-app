import type { Language } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import { ThemePicker } from "+theme"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

test("The theme picker button has an accessibility label.", () => {
    // GIVEN a test subject.
    // GIVEN that the active language is Danish.
    const themePicker = renderThemePickerComponent({
        activeLanguage: "da",
    })
    
    // THEN the theme picker button has an accessibility label in Danish.
    expect(themePicker.getButton()).toHaveAccessibleName("Skift visuelt tema")
    
    // WHEN changing the active language to English.
    themePicker.changeActiveLanguage("en")
    
    // THEN the theme picker button has an accessibility label in English.
    expect(themePicker.getButton()).toHaveAccessibleName("Change visual theme")
})

test("The theme picker has three options.", () => {
    // GIVEN a test subject.
    // GIVEN that the active language is Danish.
    const themePicker = renderThemePickerComponent({
        activeLanguage: "da",
    })
    
    // THEN the theme picker has three options in Danish.
    const options = themePicker.getOptions()
    
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveAccessibleName("Automatisk")
    expect(options[1]).toHaveAccessibleName("Lyst")
    expect(options[2]).toHaveAccessibleName("Mørkt")
    
    // WHEN changing the active language to English.
    themePicker.changeActiveLanguage("en")
    
    // THEN the theme picker has three options in English.
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveAccessibleName("Automatic")
    expect(options[1]).toHaveAccessibleName("Light")
    expect(options[2]).toHaveAccessibleName("Dark")
})

test("The change handler is invoked upon selecting the 'match-media' option.", () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the active language is English.
    const themePicker = renderThemePickerComponent({
        activeLanguage: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'match-media' option.
    themePicker.selectOption("Automatic")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("match-media")
})

test("The change handler is invoked upon selecting the 'light' option.", () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the active language is English.
    const themePicker = renderThemePickerComponent({
        activeLanguage: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'light' option.
    themePicker.selectOption("Light")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("light")
})

test("The change handler is invoked upon selecting the 'dark' option.", () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the active language is English.
    const themePicker = renderThemePickerComponent({
        activeLanguage: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'dark' option.
    themePicker.selectOption("Dark")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("dark")
})

function renderThemePickerComponent(options?: {
    activeLanguage?: Language,
    onThemeSelected?: (selectedTheme: ThemeSelection) => void,
}) {
    const activeLanguage = options?.activeLanguage ?? "en"
    const mediaTheme: Theme = "light"
    const selectedTheme: ThemeSelection = "match-media"
    const onThemeSelected = options?.onThemeSelected
    
    const { rerender } = render((
        <ThemePicker
            activeLanguage={activeLanguage}
            mediaTheme={mediaTheme}
            selectedTheme={selectedTheme}
            onThemeSelected={onThemeSelected}
        />
    ))
    
    return {
        getButton: () => screen.getByRole("button"),
        getOptions: () => screen.getAllByRole("option"),
        selectOption: (accessibleName: string) => {
            const option = screen.getByRole("option", { name: accessibleName })
            userEvent.click(option)
        },
        changeActiveLanguage: (language: Language) => {
            rerender((
                <ThemePicker
                    activeLanguage={language}
                    mediaTheme={mediaTheme}
                    selectedTheme={selectedTheme}
                    onThemeSelected={onThemeSelected}
                />
            ))
        },
    }
}
