import type { Language } from "+i18n"
import { LanguagePicker } from "+i18n"
import type { ByRoleOptions } from "@testing-library/preact"
import { render, screen, waitFor } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

test("The language picker propagates the class list.", () => {
    // GIVEN a language picker.
    // AND the class list is 'noun verb adjective'.
    givenALanguagePicker({ class: "noun verb adjective" })
    
    // THEN the language picker has classes 'noun', 'verb', and 'adjective'.
    expect(theLanguagePicker()).toHaveClass("noun", "verb", "adjective")
})

test("The language picker popup has two options.", async () => {
    // GIVEN a language picker.
    givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has two options.
    expect(theLanguagePickerOptions()).toHaveLength(2)
})

test("The language picker popup has a Danish option.", async () => {
    // GIVEN a language picker.
    givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has a Danish option.
    expect(theLanguagePickerOption({ name: "Dansk" })).toBeInTheDocument()
})

test("The language picker popup has an English option.", async () => {
    // GIVEN a language picker.
    givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has an English option.
    expect(theLanguagePickerOption({ name: "English" })).toBeInTheDocument()
})

test("The change handler is invoked when left-clicking on the Danish option in the language picker popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a language picker.
    // AND English is the selected option.
    givenALanguagePicker({ selection: "en", handleChange })
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // WHEN left-clicking on the Danish option in the language picker popup.
    whenLeftClickingOnAnOptionInTheLanguagePickerPopup("Dansk")
    
    // THEN the change handler is invoked once.
    expect(handleChange).toHaveBeenCalledTimes(1)
    
    // AND the change handler is invoked with 'da' as argument.
    expect(handleChange).toHaveBeenCalledWith("da")
})

test("The change handler is invoked when left-clicking on the English option in the language picker popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a language picker.
    // AND Danish is the selected option.
    givenALanguagePicker({ selection: "da", handleChange })
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // WHEN left-clicking on the English option in the language picker popup.
    whenLeftClickingOnAnOptionInTheLanguagePickerPopup("English")
    
    // THEN the change handler is invoked once.
    expect(handleChange).toHaveBeenCalledTimes(1)
    
    // AND the change handler is invoked with 'en' as argument.
    expect(handleChange).toHaveBeenCalledWith("en")
})

function givenALanguagePicker(options?: {
    selection?: Language,
    handleChange?: (selection: Language) => void,
    class?: string
}) {
    render((
        <LanguagePicker
            class={options?.class}
            selection={options?.selection ?? "en"}
            onLanguageSelected={options?.handleChange}
        />
    ))
}

async function givenAVisibleLanguagePickerPopup() {
    whenLeftClickingOnTheLanguagePickerButton()
    
    await waitFor(() => {
        expect(theLanguagePickerPopup()).not.toHaveClass("hidden")
    })
}

function whenLeftClickingOnTheLanguagePickerButton() {
    userEvent.click(theLanguagePickerButton())
}

function whenLeftClickingOnAnOptionInTheLanguagePickerPopup(
    accessibleNameOfOption: string,
) {
    userEvent.click(theLanguagePickerOption({ name: accessibleNameOfOption }))
}

function theLanguagePicker(): HTMLElement {
    const languagePickerElement = theLanguagePickerButton().parentElement // eslint-disable-line testing-library/no-node-access
    
    // When the assumption of the language picker being a <div> element fails,
    // it may open the door to an easier way of retrieving the language picker element.
    expect(languagePickerElement).toBeInstanceOf(HTMLDivElement)
    
    return languagePickerElement! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

function theLanguagePickerButton(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("button", queryOptions)
}

function theLanguagePickerPopup(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("listbox", queryOptions)
}

function theLanguagePickerOption(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("option", queryOptions)
}

function theLanguagePickerOptions(
    queryOptions?: ByRoleOptions,
): ReadonlyArray<HTMLElement> {
    return screen.getAllByRole("option", queryOptions)
}
