import { LinearListboxOption, Listbox, OpaqueButton } from "+elements"
import { fireEvent, render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

const appleCultivars = [
    "ambrosia",
    "belle-de-boskoop",
    "crimson-delight",
    "golden-delicious",
    "royal-gala",
    "spartan",
] as const

type AppleCultivar = (typeof appleCultivars)[number]

const firstAppleCultivar = appleCultivars[0]
const secondAppleCultivar = appleCultivars[1]
const secondToLastAppleCultivar = appleCultivars[appleCultivars.length - 2]
const lastAppleCultivar = appleCultivars[appleCultivars.length - 1]

test("The listbox button has an accessibility label.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox button has an accessibility label.
    expect(listbox.getButton()).toHaveAccessibleName("Choose an apple cultivar")
})

test("The listbox button displays the selected option.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'ambrosia'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "ambrosia",
    })
    
    // THEN the listbox button displays the selected option.
    expect(listbox.getButton()).toHaveTextContent("ambrosia")
})

test("The listbox button controls the listbox popup.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox button is associated with a popup.
    expect(listbox.getButton()).toHaveAttribute("aria-haspopup", "true")
    
    // AND the listbox button controls the listbox popup.
    expect(listbox.getButton()).toHaveAttribute("aria-controls", "apple-cultivar-picker-listbox-popup")
})

test("The listbox popup is hidden initially.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup appears when you click on the listbox button.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // WHEN clicking on the listbox button.
    await listbox.clickButton()
    
    // THEN the listbox popup is shown.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
})

test("The listbox popup disappears when you click on the listbox button again.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN clicking on the listbox button again.
    await listbox.clickButton()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup displays all options.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // WHEN the listbox popup appears.
    await listbox.clickButton()
    
    // THEN the listbox popup displays all options.
    const options = listbox.getOptions()
    expect(options).toHaveLength(appleCultivars.length)
    
    for (let i = 0; i < appleCultivars.length; i++) {
        expect(options[i]).toHaveAccessibleName(appleCultivars[i])
    }
})

test("The listbox popup has an accessibility label.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox popup has an accessibility label.
    expect(listbox.getPopup()).toHaveAccessibleName("Choose an apple cultivar")
})

test("The selected option is highlighted as the listbox popup appears.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'crimson-delight'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "crimson-delight",
    })
    
    // WHEN the listbox popup appears.
    await listbox.clickButton()
    
    // THEN the selected option is highlighted.
    const highlightedOption = listbox.getOption("crimson-delight")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-crimson-delight")
})

test("The listbox popup appears and the selected option is highlighted when you press the Enter key while the listbox button has focus.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'belle-de-boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "belle-de-boskoop",
    })
    
    // GIVEN that the listbox button has focus.
    listbox.giveFocusToButton()
    
    // WHEN pressing the Enter key.
    await listbox.pressEnterKey()
    
    // THEN the listbox popup is shown.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
    
    // AND the selected option is highlighted.
    const highlightedOption = listbox.getOption("belle-de-boskoop")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-belle-de-boskoop")
})

test("The listbox popup appears and the selected option is highlighted when you press the Space key while the listbox button has focus.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'golden-delicious'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "golden-delicious",
    })
    
    // GIVEN that the listbox button has focus.
    listbox.giveFocusToButton()
    
    // WHEN pressing the Space key.
    await listbox.pressSpaceKey()
    
    // THEN the listbox popup is shown.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
    
    // AND the selected option is highlighted.
    const highlightedOption = listbox.getOption("golden-delicious")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-golden-delicious")
})

test("An option is highlighted when you move the cursor onto it.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN moving the cursor onto an option.
    await listbox.moveCursorOntoOption("golden-delicious")
    
    // THEN the hovered option is highlighted.
    const highlightedOption = listbox.getOption("golden-delicious")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-golden-delicious")
})

test("None of the options are highlighted when you move the cursor outside the listbox popup.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'ambrosia'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "ambrosia",
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN moving the cursor outside the listbox popup.
    listbox.moveCursorAwayFromOptions()
    
    // THEN none of the options are highlighted.
    for (const option of listbox.getOptions()) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the listbox popup has no active descendant.
    expect(listbox.getActiveDescendant()).toBeNull()
})

test("The listbox popup appears and the selected option is highlighted when you press the Arrow Down key while the listbox button has focus.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'belle-de-boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "belle-de-boskoop",
    })
    
    // GIVEN that the listbox button has focus.
    listbox.giveFocusToButton()
    
    // WHEN pressing the Arrow Down key.
    await listbox.pressArrowDownKey()
    
    // THEN the listbox popup is shown.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
    
    // AND the selected option is highlighted.
    const highlightedOption = listbox.getOption("belle-de-boskoop")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-belle-de-boskoop")
})

test("The first option is highlighted when you press the Arrow Down while none of the options are highlighted.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'belle-de-boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "belle-de-boskoop",
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that none of the options are highlighted.
    listbox.moveCursorAwayFromOptions()
    
    // WHEN pressing the Arrow Down key.
    await listbox.pressArrowDownKey()
    
    // THEN the first option is highlighted.
    const highlightedOption = listbox.getOption(firstAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${firstAppleCultivar}`)
})

test("The next option is highlighted when you press the Arrow Down key.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the first option is highlighted.
    await listbox.moveCursorOntoOption(firstAppleCultivar)
    
    // WHEN pressing the Arrow Down key.
    await listbox.pressArrowDownKey()
    
    // THEN the second option is highlighted.
    const highlightedOption = listbox.getOption(secondAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${secondAppleCultivar}`)
})

test("The first option is highlighted when you press the Arrow Down key while the last option is highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the last option is highlighted.
    await listbox.moveCursorOntoOption(lastAppleCultivar)
    
    // WHEN pressing the Arrow Down key.
    await listbox.pressArrowDownKey()
    
    // THEN the first option is highlighted.
    const highlightedOption = listbox.getOption(firstAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${firstAppleCultivar}`)
})

test("The listbox popup appears and the selected option is highlighted when you press the Arrow Up key while the listbox button has focus.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'royal-gala'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "royal-gala",
    })
    
    // GIVEN that the listbox button has focus.
    listbox.giveFocusToButton()
    
    // WHEN pressing the Arrow Up key.
    await listbox.pressArrowUpKey()
    
    // THEN the listbox popup is shown.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
    
    // AND the selected option is highlighted.
    const highlightedOption = listbox.getOption("royal-gala")
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe("apple-cultivar-picker-royal-gala")
})

test("The last option is highlighted when you press the Arrow Up while none of the options are highlighted.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'royal-gala'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "royal-gala",
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that none of the options are highlighted.
    listbox.moveCursorAwayFromOptions()
    
    // WHEN pressing the Arrow Up key.
    await listbox.pressArrowUpKey()
    
    // THEN the last option is highlighted.
    const highlightedOption = listbox.getOption(lastAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${lastAppleCultivar}`)
})

test("The previous option is highlighted when you press the Arrow Up key.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the last option is highlighted.
    await listbox.moveCursorOntoOption(lastAppleCultivar)
    
    // WHEN pressing the Arrow Up key.
    await listbox.pressArrowUpKey()
    
    // THEN the second to last option is highlighted.
    const highlightedOption = listbox.getOption(secondToLastAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${secondToLastAppleCultivar}`)
})

test("The last option is highlighted when you press the Arrow Up key while the first option is highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the first option is highlighted.
    await listbox.moveCursorOntoOption(firstAppleCultivar)
    
    // WHEN pressing the Arrow Up key.
    await listbox.pressArrowUpKey()
    
    // THEN the last option is highlighted.
    const highlightedOption = listbox.getOption(lastAppleCultivar)
    expect(highlightedOption).toHaveClass("bg-accent-600")
    
    // AND none of the other options are highlighted.
    for (const option of listbox.getOptionsExcept(highlightedOption)) {
        expect(option).not.toHaveClass("bg-accent-600")
    }
    
    // AND the active descendant of the listbox popup is the highlighted option.
    expect(listbox.getActiveDescendant()).toBe(`apple-cultivar-picker-${lastAppleCultivar}`)
})

test("Only the selected option is marked as selected.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'belle-de-boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "belle-de-boskoop",
    })
    
    // WHEN the listbox popup appears.
    await listbox.clickButton()
    
    // THEN the selected option is marked as selected.
    expect(listbox.getSelectedOption()).toHaveAccessibleName("belle-de-boskoop")
    
    // AND none of the other options are marked as selected.
    expect(listbox.getNonSelectedOptions())
        .toHaveLength(appleCultivars.length - 1)
})

test("The change handler is invoked when you click on an option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the selected option is 'golden-delicious'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "golden-delicious",
        onOptionSelected: spyingChangeHandler,
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN clicking on the 'royal-gala' option.
    await listbox.clickOption("royal-gala")
    
    // THEN the change handler has been invoked once.
    // AND the clicked option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("royal-gala")
})

test("The change handler is invoked when you press the Enter key while an option is highlighted.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the selected option is 'golden-delicious'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "royal-gala",
        onOptionSelected: spyingChangeHandler,
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the 'belle-de-boskoop' option is highlighted.
    await listbox.moveCursorOntoOption("belle-de-boskoop")
    
    // WHEN pressing the Enter key.
    await listbox.pressEnterKey()
    
    // THEN the change handler has been invoked once.
    // AND the highlighted option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("belle-de-boskoop")
})

test("The change handler is invoked when you press the Space key while an option is highlighted.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the selected option is 'belle-de-boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "belle-de-boskoop",
        onOptionSelected: spyingChangeHandler,
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that the 'crimson-delight' option is highlighted.
    await listbox.moveCursorOntoOption("crimson-delight")
    
    // WHEN pressing the Space key.
    await listbox.pressSpaceKey()
    
    // THEN the change handler has been invoked once.
    // AND the highlighted option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("crimson-delight")
})

test("The listbox popup remains visible when you click on its border.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN clicking on the border of the listbox popup.
    await listbox.clickPopupBorder()
    
    // THEN the listbox popup remains visible.
    expect(listbox.getPopupContainer()).not.toHaveClass("invisible")
})

test("The listbox popup disappears when you click on an option.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'crimson-delight'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "crimson-delight",
    })
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN clicking on an option.
    await listbox.clickOption("spartan")
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
})

test("The listbox popup disappears when you click outside the listbox.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN clicking outside the listbox.
    await listbox.clickOutside()
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
})

test("The listbox popup disappears when you tap outside the listbox.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN tapping outside the listbox.
    await listbox.tapOutside()
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
})

test("The listbox popup disappears when you press the Enter key while none of the options are highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN pressing the Enter key.
    await listbox.pressEnterKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you press the Enter key while an option is highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that an option is highlighted.
    await listbox.moveCursorOntoOption("golden-delicious")
    
    // WHEN pressing the Enter key.
    await listbox.pressEnterKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you press the Space key while none of the options are highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN pressing the Space key.
    await listbox.pressSpaceKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you press the Space key while an option is highlighted.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // GIVEN that an option is highlighted.
    await listbox.moveCursorOntoOption("golden-delicious")
    
    // WHEN pressing the Space key.
    await listbox.pressSpaceKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you press the Escape key.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN pressing the Escape key.
    await listbox.pressEscapeKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you press the Tab key.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN pressing the Tab key.
    await listbox.pressTabKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when you hold the Shift key and press the Tab key.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN holding the Shift key and pressing the Tab key.
    await listbox.holdShiftKey()
    await listbox.pressTabKey()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup disappears when the window loses focus.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is shown.
    await listbox.clickButton()
    
    // WHEN the window loses focus.
    listbox.blurWindow()
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopupContainer()).toHaveClass("invisible")
})

function renderListboxComponentOfAppleCultivars(options?: {
    selectedOption?: AppleCultivar,
    onOptionSelected?: (selectedOption: AppleCultivar) => void,
}) {
    const selectedOption = options?.selectedOption ?? "ambrosia"
    const onOptionSelected = options?.onOptionSelected
    
    const user = userEvent.setup()
    
    render((
        <Listbox
            id="apple-cultivar-picker"
            accessibilityLabel="Choose an apple cultivar"
            options={appleCultivars}
            selectedOption={selectedOption}
            onOptionSelected={onOptionSelected}
            renderButton={() => (
                <OpaqueButton>
                    {selectedOption}
                </OpaqueButton>
            )}
            renderOption={(option) => (
                <LinearListboxOption>
                    {option}
                </LinearListboxOption>
            )}
        />
    ))
    
    function getButton(): HTMLElement {
        return screen.getByRole("button")
    }
    
    function getPopup(): HTMLElement {
        return screen.getByRole("listbox")
    }
    
    function getPopupContainer(): HTMLElement {
        return getPopup().parentElement! // eslint-disable-line
    }
    
    function getOptions(): ReadonlyArray<HTMLElement> {
        return screen.getAllByRole("option")
    }
    
    function getOption(name: AppleCultivar): HTMLElement {
        return screen.getByRole("option", { name })
    }
    
    function getOptionsExcept(
        optionToLeaveOut: HTMLElement,
    ): ReadonlyArray<HTMLElement> {
        return getOptions().filter((option) => option !== optionToLeaveOut)
    }
    
    function getSelectedOption(): HTMLElement {
        return screen.getByRole("option", { selected: true })
    }
    
    function getNonSelectedOptions(): ReadonlyArray<HTMLElement> {
        return screen.getAllByRole("option", { selected: false })
    }
    
    function getActiveDescendant(): string | null {
        return getPopup().getAttribute("aria-activedescendant")
    }
    
    function giveFocusToButton() {
        getButton().focus()
    }
    
    async function clickButton() {
        await user.click(getButton())
    }
    
    async function clickPopupBorder() {
        await user.click(getPopupContainer())
    }
    
    async function clickOutside() {
        await user.click(document.body)
    }
    
    async function tapOutside() {
        await user.pointer({ keys: "[TouchA]", target: document.body })
    }
    
    function blurWindow() {
        fireEvent.blur(window)
    }
    
    async function moveCursorOntoOption(name: AppleCultivar) {
        await user.hover(getOption(name))
    }
    
    function moveCursorAwayFromOptions() {
        // Calling `user.unhover(getPopup())` won't trigger the correct
        // mouse leave event on the list of options.
        fireEvent.mouseLeave(getPopup()) // eslint-disable-line
    }
    
    async function clickOption(name: AppleCultivar) {
        await user.click(getOption(name))
    }
    
    async function holdShiftKey() {
        await user.keyboard("{Shift>}")
    }
    
    async function pressArrowDownKey() {
        await user.keyboard("{ArrowDown}")
    }
    
    async function pressArrowUpKey() {
        await user.keyboard("{ArrowUp}")
    }
    
    async function pressEnterKey() {
        await user.keyboard("{Enter}")
    }
    
    async function pressEscapeKey() {
        await user.keyboard("{Escape}")
    }
    
    async function pressSpaceKey() {
        await user.keyboard(" ")
    }
    
    async function pressTabKey() {
        await user.keyboard("{Tab}")
    }
    
    return {
        getButton,
        getPopupContainer,
        getPopup,
        getOptions,
        getOption,
        getOptionsExcept,
        getSelectedOption,
        getNonSelectedOptions,
        getActiveDescendant,
        giveFocusToButton,
        clickButton,
        clickPopupBorder,
        clickOutside,
        tapOutside,
        blurWindow,
        moveCursorOntoOption,
        moveCursorAwayFromOptions,
        clickOption,
        holdShiftKey,
        pressArrowDownKey,
        pressArrowUpKey,
        pressEnterKey,
        pressEscapeKey,
        pressSpaceKey,
        pressTabKey,
    }
}
