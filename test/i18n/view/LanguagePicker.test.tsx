import type { Language } from "+i18n"
import { LanguagePicker } from "+i18n"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

test("The language picker button displays the currently selected language when it is 'da'.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected language is 'da'.
    const languagePicker = renderLanguagePickerComponent({
        selectedLanguage: "da",
    })
    
    // THEN the language picker button displays the currently selected language.
    expect(languagePicker.getButton()).toHaveAccessibleName("Dansk")
})

test("The language picker button displays the currently selected language when it is 'en'.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected language is 'en'.
    const languagePicker = renderLanguagePickerComponent({
        selectedLanguage: "en",
    })
    
    // THEN the language picker button displays the currently selected language.
    expect(languagePicker.getButton()).toHaveAccessibleName("English")
})

test("The language picker has two options.", () => {
    // GIVEN a test subject.
    const languagePicker = renderLanguagePickerComponent()
    
    // THEN the language picker has two options.
    const options = languagePicker.getOptions()
    
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveAccessibleName("Dansk")
    expect(options[1]).toHaveAccessibleName("English")
})

test("The change handler is invoked upon selecting the 'da' option.", () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    const languagePicker = renderLanguagePickerComponent({
        onLanguageSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'da' option.
    languagePicker.selectOption("Dansk")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("da")
})

test("The change handler is invoked upon selecting the 'en' option.", () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    const languagePicker = renderLanguagePickerComponent({
        onLanguageSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'en' option.
    languagePicker.selectOption("English")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("en")
})

function renderLanguagePickerComponent(options?: {
    selectedLanguage?: Language,
    onLanguageSelected?: (selectedLanguage: Language) => void,
}) {
    const selectedLanguage = options?.selectedLanguage ?? "da"
    const onLanguageSelected = options?.onLanguageSelected
    
    render((
        <LanguagePicker
            selectedLanguage={selectedLanguage}
            onLanguageSelected={onLanguageSelected}
        />
    ))
    
    return {
        getButton: () => screen.getByRole("button"),
        getOptions: () => screen.getAllByRole("option"),
        selectOption: (accessibleName: string) => {
            const option = screen.getByRole("option", { name: accessibleName })
            userEvent.click(option)
        },
    }
}
