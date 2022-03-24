import { fireEvent, render, screen } from "@testing-library/preact"
import { SettingsPanel } from "../main/SettingsPanel"

const insideViewport = "top-4"
const outsideViewport = "-top-24"

test("The settings panel is visible initially.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // THEN the settings panel is visible.
    expect(settingsPanel.getPanel()).toHaveClass(insideViewport)
})

test("The settings panel remains visible when you scroll down insignificantly.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // WHEN scrolling down insignificantly.
    settingsPanel.scrollDownInsignificantly()
    
    // THEN the settings panel is visible.
    expect(settingsPanel.getPanel()).toHaveClass(insideViewport)
})

test("The settings panel disappears when you scroll down considerably.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // WHEN scrolling down considerably.
    settingsPanel.scrollDownConsiderably()
    
    // THEN the settings panel is hidden.
    expect(settingsPanel.getPanel()).toHaveClass(outsideViewport)
})

test("The settings panel remains hidden when you scroll up insignificantly.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // GIVEN that the settings panel is hidden.
    settingsPanel.scrollDownConsiderably()
    
    // WHEN scrolling up insignificantly.
    settingsPanel.scrollUpInsignificantly()
    
    // THEN the settings panel is hidden.
    expect(settingsPanel.getPanel()).toHaveClass(outsideViewport)
})

test("The settings panel reappears when you scroll up considerably.", () => {
    // GIVEN a test subject.
    const settingsPanel = renderSettingsPanel()
    
    // GIVEN that the settings panel is hidden.
    settingsPanel.scrollDownConsiderably()
    
    // WHEN scrolling up considerably.
    settingsPanel.scrollUpConsiderably()
    
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
    
    function scrollDownConsiderably() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 25 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
    }
    
    function scrollUpConsiderably() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 25 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 5 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
    }
    
    function scrollDownInsignificantly() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 2 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 4 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 2 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY + 1 } })
    }
    
    function scrollUpInsignificantly() {
        // Soft scrolling fires multiple events.
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 2 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 4 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 2 } })
        fireEvent.scroll(window, { target: { scrollY: window.scrollY - 1 } })
    }
    
    return {
        getPanel,
        scrollDownConsiderably,
        scrollUpConsiderably,
        scrollDownInsignificantly,
        scrollUpInsignificantly,
    }
}
