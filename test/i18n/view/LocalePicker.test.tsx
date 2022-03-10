import type { Locale } from "+i18n"
import { LocalePicker, LocaleProvider } from "+i18n"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

test("The locale picker button has an accessibility label.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected locale is 'da'.
    const localePicker = renderLocalePickerComponent({
        selectedLocale: "da",
    })
    
    // THEN the locale picker button has an accessibility label in Danish.
    expect(localePicker.getButton()).toHaveAccessibleName("Skift sprog")
    
    // WHEN changing the locale to English.
    await localePicker.selectOption("English")
    
    // THEN the locale picker button has an accessibility label in English.
    expect(localePicker.getButton()).toHaveAccessibleName("Change language")
})

test("The locale picker button displays the selected 'da' locale.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected locale is 'da'.
    const localePicker = renderLocalePickerComponent({
        selectedLocale: "da",
    })
    
    // THEN the locale picker button displays the selected locale.
    expect(localePicker.getButton()).toHaveTextContent("Dansk")
})

test("The locale picker button displays the selected 'en' locale.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected locale is 'en'.
    const localePicker = renderLocalePickerComponent({
        selectedLocale: "en",
    })
    
    // THEN the locale picker button displays the selected locale.
    expect(localePicker.getButton()).toHaveTextContent("English")
})

test("The locale picker has two options.", () => {
    // GIVEN a test subject.
    const localePicker = renderLocalePickerComponent()
    
    // THEN the locale picker has two options.
    const options = localePicker.getOptions()
    
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveAccessibleName("Dansk")
    expect(options[1]).toHaveAccessibleName("English")
})

test("The change handler is invoked upon selecting the 'da' option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    const localePicker = renderLocalePickerComponent({
        onLocaleSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'da' option.
    await localePicker.selectOption("Dansk")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("da")
})

test("The change handler is invoked upon selecting the 'en' option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    const localePicker = renderLocalePickerComponent({
        onLocaleSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'en' option.
    await localePicker.selectOption("English")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("en")
})

function renderLocalePickerComponent(options?: {
    selectedLocale?: Locale,
    onLocaleSelected?: (selectedLocale: Locale) => void,
}) {
    const selectedLocale = options?.selectedLocale ?? "da"
    const onLocaleSelected = options?.onLocaleSelected
    
    const user = userEvent.setup()
    
    const { rerender } = render((
        <LocaleProvider value={selectedLocale}>
            <LocalePicker onLocaleSelected={changeLocale}/>
        </LocaleProvider>
    ))
    
    function changeLocale(newLocale: Locale) {
        onLocaleSelected?.(newLocale)
        
        rerender((
            <LocaleProvider value={newLocale}>
                <LocalePicker onLocaleSelected={changeLocale}/>
            </LocaleProvider>
        ))
    }
    
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
    
    return {
        getButton,
        getOptions,
        selectOption,
    }
}
