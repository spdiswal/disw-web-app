import { Listbox } from "+elements/listbox"
import type { ClassList } from "+types"
import type { ByRoleOptions } from "@testing-library/preact"
import { fireEvent, render, screen, waitFor } from "@testing-library/preact"
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

test("The listbox propagates the class list.", () => {
    // GIVEN a listbox of apple cultivars.
    // AND the class list is 'alice bramley cox-orange'.
    givenAListboxOfAppleCultivars({ class: "alice bramley cox-orange" })
    
    // THEN the listbox has classes 'alice', 'bramley', and 'cox-orange'.
    expect(theListbox()).toHaveClass("alice", "bramley", "cox-orange")
})

test("The listbox button displays the selected option.", () => {
    // GIVEN a listbox of apple cultivars.
    // AND 'Ambrosia' is the selected option.
    givenAListboxOfAppleCultivars({ selection: "Ambrosia" })
    
    // THEN the listbox button says 'Ambrosia'.
    expect(theListboxButton()).toHaveTextContent("Ambrosia")
})

test("The listbox popup is hidden initially.", () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // THEN the listbox popup is hidden.
    expect(theListboxPopup()).toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    expect(theListboxButton({ expanded: false })).toBeInTheDocument()
})

test("The listbox popup appears when left-clicking on the listbox button.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // WHEN left-clicking on the listbox button.
    whenLeftClickingOnTheListboxButton()
    
    // THEN the listbox popup is no longer hidden.
    await waitFor(() => {
        expect(theListboxPopup()).not.toHaveClass("hidden")
    })
    
    // AND the listbox button is marked as expanded.
    expect(theListboxButton({ expanded: true })).toBeInTheDocument()
})

test("The listbox popup disappears when left-clicking on the listbox button again.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the listbox button.
    whenLeftClickingOnTheListboxButton()
    
    // THEN the listbox popup is hidden.
    await waitFor(() => {
        expect(theListboxPopup()).toHaveClass("hidden")
    })
    
    // AND the listbox button is marked as collapsed.
    expect(theListboxButton({ expanded: false })).toBeInTheDocument()
})

test("The change handler is not invoked when left-clicking on the listbox button again.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the listbox button.
    whenLeftClickingOnTheListboxButton()
    
    // THEN the change handler is not invoked.
    expect(handleChange).not.toHaveBeenCalled()
})

test("The listbox popup displays all options.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // THEN the listbox popup displays all apple cultivars.
    const options = theListboxOptions()
    expect(options).toHaveLength(appleCultivars.length)
    
    for (let i = 0; i < appleCultivars.length; i++) {
        expect(options[i]).toHaveTextContent(appleCultivars[i])
    }
})

test("Only the selected option is marked as selected.", async () => {
    // GIVEN a listbox of apple cultivars.
    // AND 'Belle de Boskoop' is the selected option.
    givenAListboxOfAppleCultivars({ selection: "Belle de Boskoop" })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // THEN the selected option is marked as selected.
    expect(theListboxOption({ selected: true })).toHaveTextContent("Belle de Boskoop")
    
    // AND none of the other options are marked as selected.
    expect(theListboxOptions({ selected: false }))
        .toHaveLength(appleCultivars.length - 1)
})

test("The listbox popup disappears when left-clicking on an option in the listbox popup.", async () => {
    // GIVEN a listbox of apple cultivars.
    // AND 'Crimson Delight' is the selected option.
    givenAListboxOfAppleCultivars({ selection: "Crimson Delight" })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the 'Spartan' option in the listbox popup.
    whenLeftClickingOnAnOptionInTheListboxPopup("Spartan")
    
    // THEN the listbox popup is hidden.
    await waitFor(() => {
        expect(theListboxPopup()).toHaveClass("hidden")
    })
    
    // AND the listbox button is marked as collapsed.
    expect(theListboxButton({ expanded: false })).toBeInTheDocument()
})

test("The change handler is invoked when left-clicking on an option in the listbox popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    // AND 'Golden Delicious' is the selected option.
    givenAListboxOfAppleCultivars({
        selection: "Golden Delicious",
        handleChange,
    })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the 'Royal Gala' option in the listbox popup.
    whenLeftClickingOnAnOptionInTheListboxPopup("Royal Gala")
    
    // THEN the change handler is invoked once.
    expect(handleChange).toHaveBeenCalledTimes(1)
    
    // AND the change handler is invoked with the 'Royal Gala' option as argument.
    expect(handleChange).toHaveBeenCalledWith("Royal Gala")
})

test("The listbox popup disappears when left-clicking outside the listbox popup.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking outside the listbox popup.
    whenLeftClickingOutsideTheListboxPopup()
    
    // THEN the listbox popup is hidden.
    await waitFor(() => {
        expect(theListboxPopup()).toHaveClass("hidden")
    })
    
    // AND the listbox button is marked as collapsed.
    expect(theListboxButton({ expanded: false })).toBeInTheDocument()
})

test("The change handler is not invoked when left-clicking outside the listbox popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking outside the listbox popup.
    whenLeftClickingOutsideTheListboxPopup()
    
    // THEN the change handler is not invoked.
    expect(handleChange).not.toHaveBeenCalled()
})

test("The listbox popup remains visible when left-clicking on its border.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the border of the listbox popup.
    whenLeftClickingOnTheBorderOfTheListboxPopup()
    
    // THEN the listbox popup remains visible.
    await waitFor(() => {
        expect(theListboxPopup()).not.toHaveClass("hidden")
    })
    
    // AND the listbox button remains marked as expanded.
    expect(theListboxButton({ expanded: true })).toBeInTheDocument()
})

test("The change handler is not invoked when left-clicking on the border of the listbox popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the border of the listbox popup.
    whenLeftClickingOnTheBorderOfTheListboxPopup()
    
    // THEN the change handler is not invoked.
    expect(handleChange).not.toHaveBeenCalled()
})

test("The listbox popup disappears when the window loses focus.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN the window loses focus.
    whenTheWindowLosesFocus()
    
    // THEN the listbox popup is hidden.
    expect(theListboxPopup()).toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    expect(theListboxButton({ expanded: false })).toBeInTheDocument()
})

test("The change handler is not invoked when the window loses focus.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN the window loses focus.
    whenTheWindowLosesFocus()
    
    // THEN the change handler is not invoked.
    expect(handleChange).not.toHaveBeenCalled()
})

function givenAListboxOfAppleCultivars(options?: {
    selection?: AppleCultivar,
    handleChange?: (selection: AppleCultivar) => void,
    class?: ClassList
}) {
    render((
        <Listbox
            class={options?.class}
            options={appleCultivars}
            selection={options?.selection ?? "Ambrosia"}
            onChange={options?.handleChange}
        >
            {(optionToRender: string) => ({
                key: optionToRender,
                element: <span>{optionToRender}</span>,
            })}
        </Listbox>
    ))
}

async function givenAVisibleListboxPopup() {
    whenLeftClickingOnTheListboxButton()
    
    await waitFor(() => {
        expect(theListboxPopup()).not.toHaveClass("hidden")
    })
}

function whenLeftClickingOnTheListboxButton() {
    userEvent.click(theListboxButton())
}

function whenLeftClickingOnTheBorderOfTheListboxPopup() {
    userEvent.click(theListboxPopup())
}

function whenLeftClickingOnAnOptionInTheListboxPopup(
    accessibleNameOfOption: AppleCultivar,
) {
    userEvent.click(theListboxOption({ name: accessibleNameOfOption }))
}

function whenLeftClickingOutsideTheListboxPopup() {
    userEvent.click(document.body)
}

function whenTheWindowLosesFocus() {
    fireEvent.blur(window)
}

function theListbox(): HTMLElement {
    const listboxElement = theListboxButton().parentElement // eslint-disable-line testing-library/no-node-access
    
    // When the assumption of the listbox being a <div> element fails,
    // it may open the door to an easier way of retrieving the listbox element.
    expect(listboxElement).toBeInstanceOf(HTMLDivElement)
    
    return listboxElement! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

function theListboxButton(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("button", queryOptions)
}

function theListboxPopup(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("listbox", queryOptions)
}

function theListboxOption(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("option", queryOptions)
}

function theListboxOptions(
    queryOptions?: ByRoleOptions,
): ReadonlyArray<HTMLElement> {
    return screen.getAllByRole("option", queryOptions)
}
