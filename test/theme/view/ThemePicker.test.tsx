import type { Locale } from "+i18n"
import { LocaleProvider } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import { ThemePicker } from "+theme"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"

test("The theme picker button has an accessibility label.", () => {
    // GIVEN a test subject.
    // GIVEN that the locale is Danish.
    const themePicker = renderThemePickerComponent({
        locale: "da",
    })
    
    // THEN the theme picker button has an accessibility label in Danish.
    expect(themePicker.getButton()).toHaveAccessibleName("Skift visuelt tema")
    
    // WHEN changing the locale to English.
    themePicker.changeLocale("en")
    
    // THEN the theme picker button has an accessibility label in English.
    expect(themePicker.getButton()).toHaveAccessibleName("Change visual theme")
})

test("The theme picker has three options.", () => {
    // GIVEN a test subject.
    // GIVEN that the locale is Danish.
    const themePicker = renderThemePickerComponent({
        locale: "da",
    })
    
    // THEN the theme picker has three options in Danish.
    const options = themePicker.getOptions()
    
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveAccessibleName("Automatisk")
    expect(options[1]).toHaveAccessibleName("Lyst")
    expect(options[2]).toHaveAccessibleName("Mørkt")
    
    // WHEN changing the locale to English.
    themePicker.changeLocale("en")
    
    // THEN the theme picker has three options in English.
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveAccessibleName("Automatic")
    expect(options[1]).toHaveAccessibleName("Light")
    expect(options[2]).toHaveAccessibleName("Dark")
})

test("The change handler is invoked upon selecting the 'match-media' option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = vi.fn()
    
    // GIVEN a test subject.
    // GIVEN that the locale is English.
    const themePicker = renderThemePickerComponent({
        locale: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'match-media' option.
    await themePicker.selectOption("Automatic")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("match-media")
})

test("The change handler is invoked upon selecting the 'light' option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = vi.fn()
    
    // GIVEN a test subject.
    // GIVEN that the locale is English.
    const themePicker = renderThemePickerComponent({
        locale: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'light' option.
    await themePicker.selectOption("Light")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("light")
})

test("The change handler is invoked upon selecting the 'dark' option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = vi.fn()
    
    // GIVEN a test subject.
    // GIVEN that the locale is English.
    const themePicker = renderThemePickerComponent({
        locale: "en",
        onThemeSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'dark' option.
    await themePicker.selectOption("Dark")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("dark")
})

function renderThemePickerComponent(options?: {
    readonly locale?: Locale,
    readonly onThemeSelected?: (selectedTheme: ThemeSelection) => void,
}) {
    const locale = options?.locale ?? "en"
    const mediaTheme: Theme = "light"
    const selectedTheme: ThemeSelection = "match-media"
    const onThemeSelected = options?.onThemeSelected
    
    const user = userEvent.setup()
    
    const { rerender } = render((
        <LocaleProvider value={locale}>
            <ThemePicker
                mediaTheme={mediaTheme}
                selectedTheme={selectedTheme}
                onThemeSelected={onThemeSelected}
            />
        </LocaleProvider>
    ))
    
    function getButton() {
        return screen.getByRole("button")
    }
    
    function getOptions() {
        return screen.getAllByRole("option")
    }
    
    async function selectOption(accessibleName: string) {
        const option = screen.getByRole("option", { name: accessibleName })
        await user.click(option)
    }
    
    function changeLocale(newLocale: Locale) {
        rerender((
            <LocaleProvider value={newLocale}>
                <ThemePicker
                    mediaTheme={mediaTheme}
                    selectedTheme={selectedTheme}
                    onThemeSelected={onThemeSelected}
                />
            </LocaleProvider>
        ))
    }
    
    return {
        getButton,
        getOptions,
        selectOption,
        changeLocale,
    }
}
