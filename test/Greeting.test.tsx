import { render, screen } from "@testing-library/preact"
import { Greeting } from "../main/Greeting"

describe("a greeting", () => {
    beforeEach(() => {
        render(<Greeting name="friend"/>)
    })
    
    it.each([
        "Hi there, friend!",
        "Let's go!!",
    ])("says '%s'", (expectedGreeting) => {
        expect(screen.getByRole("main")).toHaveTextContent(expectedGreeting)
    })
})
