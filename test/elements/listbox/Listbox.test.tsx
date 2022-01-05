import { Listbox } from "+elements/listbox"
import type { ClassList } from "+types"
import type { ByRoleOptions } from "@testing-library/preact"
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

test("The listbox propagates the class list.", async () => {
    // GIVEN a listbox of apple cultivars.
    // AND the class list is 'alice bramley cox-orange'.
    givenAListboxOfAppleCultivars({ class: "alice bramley cox-orange" })
    
    // THEN the listbox has classes 'alice', 'bramley', and 'cox-orange'.
    await expect(theListbox()).resolves
        .toHaveClass("alice", "bramley", "cox-orange")
})

test("The listbox button displays the selected option.", async () => {
    // GIVEN a listbox of apple cultivars.
    // AND 'Ambrosia' is the selected option.
    givenAListboxOfAppleCultivars({ selection: "Ambrosia" })
    
    // THEN the listbox button says 'Ambrosia'.
    await expect(theListboxButton()).resolves.toHaveTextContent("Ambrosia")
})

test("The listbox popup is hidden initially.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // THEN the listbox popup is hidden.
    await expect(theListboxPopup()).resolves.toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    await expect(theListboxButton({ expanded: false })).resolves
        .toBeInTheDocument()
})

test("The listbox popup appears when left-clicking on the listbox button.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // WHEN left-clicking on the listbox button.
    await whenLeftClickingOnTheListboxButton()
    
    // THEN the listbox popup is no longer hidden.
    await expect(theListboxPopup()).resolves.not.toHaveClass("hidden")
    
    // AND the listbox button is marked as expanded.
    await expect(theListboxButton({ expanded: true })).resolves
        .toBeInTheDocument()
})

test("The listbox popup disappears when left-clicking on the listbox button again.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the listbox button.
    await whenLeftClickingOnTheListboxButton()
    
    // THEN the listbox popup is hidden.
    await expect(theListboxPopup()).resolves.toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    await expect(theListboxButton({ expanded: false })).resolves
        .toBeInTheDocument()
})

test("The change handler is not invoked when left-clicking on the listbox button again.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the listbox button.
    await whenLeftClickingOnTheListboxButton()
    
    // THEN the change handler is not invoked.
    expect(handleChange).not.toHaveBeenCalled()
})

test("The listbox popup displays all options.", async () => {
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars()
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // THEN the listbox popup displays all apple cultivars.
    const options = await theListboxOptions()
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
    await expect(theListboxOption({ selected: true })).resolves
        .toHaveTextContent("Belle de Boskoop")
    
    // AND none of the other options are marked as selected.
    await expect(theListboxOptions({ selected: false })).resolves
        .toHaveLength(appleCultivars.length - 1)
})

test("The listbox popup disappears when left-clicking on an option in the listbox popup.", async () => {
    // GIVEN a listbox of apple cultivars.
    // AND 'Crimson Delight' is the selected option.
    givenAListboxOfAppleCultivars({ selection: "Crimson Delight" })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the 'Spartan' option in the listbox popup.
    await whenLeftClickingOnAnOptionInTheListboxPopup("Spartan")
    
    // THEN the listbox popup is hidden.
    await expect(theListboxPopup()).resolves.toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    await expect(theListboxButton({ expanded: false })).resolves
        .toBeInTheDocument()
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
    await whenLeftClickingOnAnOptionInTheListboxPopup("Royal Gala")
    
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
    await expect(theListboxPopup()).resolves.toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    await expect(theListboxButton({ expanded: false })).resolves
        .toBeInTheDocument()
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
    await whenLeftClickingOnTheBorderOfTheListboxPopup()
    
    // THEN the listbox popup remains visible.
    await expect(theListboxPopup()).resolves.not.toHaveClass("hidden")
    
    // AND the listbox button remains marked as expanded.
    await expect(theListboxButton({ expanded: true })).resolves
        .toBeInTheDocument()
})

test("The change handler is not invoked when left-clicking on the border of the listbox popup.", async () => {
    // GIVEN a spying change handler.
    const handleChange = jest.fn()
    
    // GIVEN a listbox of apple cultivars.
    givenAListboxOfAppleCultivars({ handleChange })
    
    // GIVEN a visible the listbox popup.
    await givenAVisibleListboxPopup()
    
    // WHEN left-clicking on the border of the listbox popup.
    await whenLeftClickingOnTheBorderOfTheListboxPopup()
    
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
    await expect(theListboxPopup()).resolves.toHaveClass("hidden")
    
    // AND the listbox button is marked as collapsed.
    await expect(theListboxButton({ expanded: false })).resolves
        .toBeInTheDocument()
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
    await whenLeftClickingOnTheListboxButton()
}

async function whenLeftClickingOnTheListboxButton() {
    userEvent.click(await theListboxButton())
}

async function whenLeftClickingOnTheBorderOfTheListboxPopup() {
    userEvent.click(await theListboxPopup())
}

async function whenLeftClickingOnAnOptionInTheListboxPopup(
    accessibleNameOfOption: AppleCultivar,
) {
    userEvent.click(await theListboxOption({
        name: accessibleNameOfOption,
    }))
}

function whenLeftClickingOutsideTheListboxPopup() {
    userEvent.click(document.body)
}

function whenTheWindowLosesFocus() {
    fireEvent.blur(window)
}

async function theListbox(): Promise<HTMLElement> {
    const listboxElement =
        (await theListboxButton()).parentElement // eslint-disable-line testing-library/no-node-access
    
    // When the assumption of the listbox being a <div> element fails,
    // it may open the door to an easier way of retrieving the listbox element.
    expect(listboxElement).toBeInstanceOf(HTMLDivElement)
    
    return listboxElement! // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

async function theListboxButton(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("button", queryOptions)
}

async function theListboxPopup(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("listbox", queryOptions)
}

async function theListboxOption(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("option", queryOptions)
}

async function theListboxOptions(
    queryOptions?: ByRoleOptions,
): Promise<ReadonlyArray<HTMLElement>> {
    return screen.findAllByRole("option", queryOptions)
}
