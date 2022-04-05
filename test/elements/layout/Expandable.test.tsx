/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { ExpansionRequestSubscriber, ExpansionRequestSubscription } from "+elements"
import { Expandable, useExpansionRequestSubscriber } from "+elements"
import { act, render, screen } from "@testing-library/preact"
import { renderHook } from "@testing-library/preact-hooks"
import userEvent from "@testing-library/user-event"

test("The section is collapsed initially.", () => {
    // GIVEN a test subject.
    const subject = renderExpandable()
    
    // THEN the section is collapsed initially.
    expect(subject.getButton()).toHaveAccessibleName("Show")
})

test("The section expands when you click on the expansion button.", async () => {
    // GIVEN a test subject.
    const subject = renderExpandable()
    
    // WHEN clicking on the expansion button.
    await subject.clickButton()
    
    // THEN the section is expanded.
    expect(subject.getButton()).toHaveAccessibleName("Hide")
})

test("The section collapses when you click on the expansion button again.", async () => {
    // GIVEN a test subject.
    const subject = renderExpandable()
    
    // GIVEN that the section is expanded.
    await subject.clickButton()
    
    // WHEN clicking on the expansion button.
    await subject.clickButton()
    
    // THEN the section is collapsed.
    expect(subject.getButton()).toHaveAccessibleName("Show")
})

test("The section expands when you request it to expand.", async () => {
    // GIVEN a subscription handler to expansion requests.
    const { result } = renderHook(() => useExpansionRequestSubscriber())
    
    // GIVEN a test subject.
    const subject = renderExpandable(result.current!.subscribe)
    
    // WHEN requesting the section to expand.
    await act(() => {
        result.current!.expand()
    })
    
    // THEN the section is expanded.
    expect(subject.getButton()).toHaveAccessibleName("Hide")
})

test("The section collapses when you request it to collapse.", async () => {
    // GIVEN a subscription handler to expansion requests.
    const { result } = renderHook(() => useExpansionRequestSubscriber())
    
    // GIVEN a test subject.
    const subject = renderExpandable(result.current!.subscribe)
    
    // GIVEN that the section is expanded.
    await subject.clickButton()
    
    // WHEN requesting the section to collapse.
    await act(() => {
        result.current!.collapse()
    })
    
    // THEN the section is collapsed.
    expect(subject.getButton()).toHaveAccessibleName("Show")
})

function renderExpandable(
    subscribeToExpansionRequests?: (subscriber: ExpansionRequestSubscriber) =>
        ExpansionRequestSubscription,
) {
    const user = userEvent.setup()
    
    render((
        <Expandable
            buttonLabels={{ collapsed: "Show", expanded: "Hide" }}
            subscribeToExpansionRequests={subscribeToExpansionRequests}
        >
            Some awesome content.
        </Expandable>
    ))
    
    function getButton(): HTMLElement {
        return screen.getByRole("button")
    }
    
    async function clickButton() {
        await user.click(getButton())
    }
    
    return {
        getButton,
        clickButton,
    }
}
