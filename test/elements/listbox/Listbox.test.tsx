import { Listbox, ListboxOption, OpaqueButton } from "+elements"
import { fireEvent, render, screen } from "@testing-library/preact"
import userEvent from "@testing-library/user-event"

const appleCultivars = [
    "Ambrosia",
    "Belle de Boskoop",
    "Crimson Delight",
    "Golden Delicious",
    "Royal Gala",
    "Spartan",
] as const

type AppleCultivar = (typeof appleCultivars)[number]

test("The listbox button displays the selected option.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'Ambrosia'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "Ambrosia",
    })
    
    // THEN the listbox button displays the selected option.
    expect(listbox.getButton()).toHaveAccessibleName("Ambrosia")
})

test("The listbox popup is hidden initially.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopup()).toHaveClass("hidden")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup appears upon clicking on the listbox button.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // WHEN clicking on the listbox button.
    await listbox.clickButton()
    
    // THEN the listbox popup is no longer hidden.
    // AND the listbox button is marked as expanded.
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "true")
})

test("The listbox popup disappears upon clicking on the button again.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is visible.
    await listbox.clickButton()
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    
    // WHEN clicking on the listbox button again.
    await listbox.clickButton()
    
    // THEN the listbox popup is hidden.
    // AND the listbox button is marked as collapsed.
    expect(listbox.getPopup()).toHaveClass("hidden")
    expect(listbox.getButton()).toHaveAttribute("aria-expanded", "false")
})

test("The listbox popup displays all options.", () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // THEN the listbox displays all apple cultivars.
    const options = listbox.getOptions()
    expect(options).toHaveLength(appleCultivars.length)
    
    for (let i = 0; i < appleCultivars.length; i++) {
        expect(options[i]).toHaveAccessibleName(appleCultivars[i])
    }
})

test("Only the selected option is marked as selected.", () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'Belle de Boskoop'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "Belle de Boskoop",
    })
    
    // THEN the selected option is marked as selected.
    // AND none of the other options are marked as selected.
    expect(listbox.getSelectedOption()).toHaveAccessibleName("Belle de Boskoop")
    expect(listbox.getNonSelectedOptions())
        .toHaveLength(appleCultivars.length - 1)
})

test("The change handler is invoked upon selecting an option.", async () => {
    // GIVEN a spying change handler.
    const spyingChangeHandler = jest.fn()
    
    // GIVEN a test subject.
    // GIVEN that the selected option is 'Golden Delicious'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "Golden Delicious",
        onOptionSelected: spyingChangeHandler,
    })
    
    // WHEN selecting the 'Royal Gala' option.
    await listbox.selectOption("Royal Gala")
    
    // THEN the change handler has been invoked once.
    // AND the selected option is passed as the argument.
    expect(spyingChangeHandler).toHaveBeenCalledTimes(1)
    expect(spyingChangeHandler).toHaveBeenCalledWith("Royal Gala")
})

test("The listbox popup disappears upon selecting an option.", async () => {
    // GIVEN a test subject.
    // GIVEN that the selected option is 'Crimson Delight'.
    const listbox = renderListboxComponentOfAppleCultivars({
        selectedOption: "Crimson Delight",
    })
    
    // GIVEN that the listbox popup is visible.
    await listbox.clickButton()
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    
    // WHEN selecting the 'Spartan' option.
    await listbox.selectOption("Spartan")
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopup()).toHaveClass("hidden")
})

test("The listbox popup disappears upon clicking outside the listbox.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is visible.
    await listbox.clickButton()
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    
    // WHEN clicking outside the listbox.
    await listbox.clickOutside()
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopup()).toHaveClass("hidden")
})

test("The listbox popup remains visible upon clicking on its border.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is visible.
    await listbox.clickButton()
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    
    // WHEN clicking on the border of the listbox popup.
    await listbox.clickPopupBorder()
    
    // THEN the listbox popup remains visible.
    expect(listbox.getPopup()).not.toHaveClass("hidden")
})

test("The listbox popup disappears when the window loses focus.", async () => {
    // GIVEN a test subject.
    const listbox = renderListboxComponentOfAppleCultivars()
    
    // GIVEN that the listbox popup is visible.
    await listbox.clickButton()
    expect(listbox.getPopup()).not.toHaveClass("hidden")
    
    // WHEN the window loses focus.
    listbox.blurWindow()
    
    // THEN the listbox popup is hidden.
    expect(listbox.getPopup()).toHaveClass("hidden")
})

function renderListboxComponentOfAppleCultivars(options?: {
    selectedOption?: AppleCultivar,
    onOptionSelected?: (selectedOption: AppleCultivar) => void,
}) {
    const selectedOption = options?.selectedOption ?? "Ambrosia"
    const onOptionSelected = options?.onOptionSelected
    
    const user = userEvent.setup()
    
    render((
        <Listbox
            options={appleCultivars}
            selectedOption={selectedOption}
            onOptionSelected={onOptionSelected}
            renderButton={({ ref, onMouseDown }, { isExpanded }) => (
                <OpaqueButton
                    forwardRef={ref}
                    forwardAriaExpanded={isExpanded}
                    onMouseDown={onMouseDown}
                >
                    {selectedOption}
                </OpaqueButton>
            )}
            renderOption={(option) => (
                <ListboxOption>
                    {option}
                </ListboxOption>
            )}
        />
    ))
    
    function getButton() {
        return screen.getByRole("button")
    }
    
    function getPopup() {
        return screen.getByRole("listbox")
    }
    
    function getOptions() {
        return screen.getAllByRole("option")
    }
    
    function getSelectedOption() {
        return screen.getByRole("option", { selected: true })
    }
    
    function getNonSelectedOptions() {
        return screen.getAllByRole("option", { selected: false })
    }
    
    async function clickButton() {
        await user.click(getButton())
    }
    
    async function clickPopupBorder() {
        await user.click(getPopup())
    }
    
    async function clickOutside() {
        await user.click(document.body)
    }
    
    function blurWindow() {
        fireEvent.blur(window)
    }
    
    async function selectOption(accessibleName: string) {
        const option = screen.getByRole("option", { name: accessibleName })
        await user.click(option)
    }
    
    return {
        getButton,
        getPopup,
        getOptions,
        getSelectedOption,
        getNonSelectedOptions,
        clickButton,
        clickPopupBorder,
        clickOutside,
        blurWindow,
        selectOption,
    }
}
