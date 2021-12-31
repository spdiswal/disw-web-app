/**
 * This test suite requires JSDOM instead of Happy DOM, which fails to interact
 * properly with the web app.
 *
 * @jest-environment jsdom
 */

import type { Language } from "+i18n"
import { LanguagePicker } from "+i18n"
import type { ByRoleOptions } from "@testing-library/preact"
import { render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

test("The language picker propagates the class string.", async () => {
    // GIVEN a language picker.
    // AND the class string is 'noun verb adjective'.
    await givenALanguagePicker({ class: "noun verb adjective" })
    
    // THEN the language picker has classes 'noun', 'verb', and 'adjective'.
    await expect(theLanguagePicker()).resolves
        .toHaveClass("noun", "verb", "adjective")
})

test("The language picker popup has two options.", async () => {
    // GIVEN a language picker.
    await givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has two options.
    await expect(theLanguagePickerOptions()).resolves.toHaveLength(2)
})

test("The language picker popup has a Danish option.", async () => {
    // GIVEN a language picker.
    await givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has a Danish option.
    await expect(theLanguagePickerOption({ name: "Dansk" })).resolves
        .toBeInTheDocument()
})

test("The language picker popup has an English option.", async () => {
    // GIVEN a language picker.
    await givenALanguagePicker()
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // THEN the language picker popup has an English option.
    await expect(theLanguagePickerOption({ name: "English" })).resolves
        .toBeInTheDocument()
})

test("The change handler is invoked when left-clicking on the Danish option in the language picker popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a language picker.
    // AND English is the selected option.
    await givenALanguagePicker({ selection: "en", handleChange })
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // WHEN left-clicking on the Danish option in the language picker popup.
    await whenLeftClickingOnAnOptionInTheLanguagePickerPopup("Dansk")
    
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
    await givenALanguagePicker({ selection: "da", handleChange })
    
    // GIVEN a visible the language picker popup.
    await givenAVisibleLanguagePickerPopup()
    
    // WHEN left-clicking on the English option in the language picker popup.
    await whenLeftClickingOnAnOptionInTheLanguagePickerPopup("English")
    
    // THEN the change handler is invoked once.
    expect(handleChange).toHaveBeenCalledTimes(1)
    
    // AND the change handler is invoked with 'en' as argument.
    expect(handleChange).toHaveBeenCalledWith("en")
})

async function givenALanguagePicker(options?: {
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
    
    await expect(theLanguagePickerButton()).resolves.toBeInTheDocument()
    await expect(theLanguagePickerPopup()).resolves.toBeInTheDocument()
}

async function givenAVisibleLanguagePickerPopup() {
    await whenLeftClickingOnTheLanguagePickerButton()
    await expect(theLanguagePickerPopup()).resolves
        .not.toHaveClass("hidden")
}

async function whenLeftClickingOnTheLanguagePickerButton() {
    userEvent.click(await theLanguagePickerButton())
}

async function whenLeftClickingOnAnOptionInTheLanguagePickerPopup(
    accessibleNameOfOption: string,
) {
    userEvent.click(await theLanguagePickerOption({
        name: accessibleNameOfOption,
    }))
}

async function theLanguagePicker(): Promise<HTMLElement> {
    const languagePickerElement =
        (await theLanguagePickerButton()).parentElement // eslint-disable-line testing-library/no-node-access
    
    // When the assumption of the language picker being a <div> element fails,
    // it may open the door to an easier way of retrieving the language picker element.
    expect(languagePickerElement).toBeInstanceOf(HTMLDivElement)
    
    return languagePickerElement! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

async function theLanguagePickerButton(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("button", queryOptions)
}

async function theLanguagePickerPopup(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("listbox", queryOptions)
}

async function theLanguagePickerOption(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("option", queryOptions)
}

async function theLanguagePickerOptions(
    queryOptions?: ByRoleOptions,
): Promise<ReadonlyArray<HTMLElement>> {
    return screen.findAllByRole("option", queryOptions)
}
