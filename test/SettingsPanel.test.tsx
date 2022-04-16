import { fireEvent, render, screen } from "@testing-library/preact"
import { SettingsPanel } from "../main/SettingsPanel"

const insideViewport = "visible top-4"
const outsideViewport = "invisible -top-24"

test("The settings panel is visible initially.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // THEN the settings panel is visible.
    expect(settingsPanel.getPanel()).toHaveClass(insideViewport)
})

test("The settings panel disappears when you scroll down.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // WHEN scrolling down.
    settingsPanel.scrollDown()
    
    // THEN the settings panel is hidden.
    expect(settingsPanel.getPanel()).toHaveClass(outsideViewport)
})

test("The settings panel reappears when you scroll up.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // GIVEN that the settings panel is hidden.
    settingsPanel.scrollDown()
    
    // WHEN scrolling up.
    settingsPanel.scrollUp()
    
    // THEN the settings panel is visible.
    expect(settingsPanel.getPanel()).toHaveClass(insideViewport)
})

function renderSettingsPanel() {
    render((
        <SettingsPanel
            mediaTheme="light"
            themeSelection="match-media"
            onLocaleSelected={() => { /* do nothing */ }}
            onThemeSelected={() => { /* do nothing */ }}
        />
    ))
    
    function getPanel(): HTMLElement {
        return screen.getByLabelText("Indstillinger")
    }
    
    function scrollDown() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 25 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
    }
    
    function scrollUp() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 25 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
    }
    
    return {
        getPanel,
        scrollDown,
        scrollUp,
    }
}
