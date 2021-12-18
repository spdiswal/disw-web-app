import { ProfilePage } from "+profile"
import { render, screen, within } from "@testing-library/preact"

describe("the profile page", () => {
    let main: HTMLElement
    
    beforeEach(() => {
        render(<ProfilePage name="Perseverance"/>)
        main = screen.getByRole("main")
    })
    
    describe("the picture", () => {
        let picture: HTMLElement
        
        beforeEach(() => {
            picture = within(main).getByRole("img")
        })
        
        const expectedPictureAssetUrl = "perseverance-dummy.webp"
        
        it(`has a source: '${expectedPictureAssetUrl}'`, () => {
            expect(picture).toHaveAttribute("src", expectedPictureAssetUrl)
        })
        
        const expectedAlternativeText = "My self-portrait. Courtesy NASA/JPL-Caltech."
        
        it(`has an alternative text: '${expectedAlternativeText}'`, () => {
            expect(picture).toHaveAttribute("alt", expectedAlternativeText)
        })
    })
    
    const expectedGreeting = "Hi! My name is Perseverance."
    
    it(`has a greeting: '${expectedGreeting}'`, () => {
        expect(main).toHaveTextContent(expectedGreeting)
    })
    
    const expectedAmbition = "And I enjoy digging through the Martian soil!"
    
    it(`has an ambition: '${expectedAmbition}'`, () => {
        expect(main).toHaveTextContent(expectedAmbition)
    })
    
    it("has three occupations", () => {
        expect(within(main).getAllByRole("article")).toHaveLength(3)
    })
    
    describe("the occupation at index 0", () => {
        let occupation: HTMLElement
        
        beforeEach(() => {
            occupation = within(main).getAllByRole("article")[0]
        })
        
        const expectedTitle = "Astrobiologist"
        
        it(`has a title: '${expectedTitle}'`, () => {
            expect(occupation).toHaveTextContent(expectedTitle)
        })
        
        const expectedPeriod = "2021\u2013present"
        
        it(`has a period: '${expectedPeriod}'`, () => {
            expect(occupation).toHaveTextContent(expectedPeriod)
        })
        
        const expectedOrganisation = "NASA"
        
        it(`has an organisation: '${expectedOrganisation}'`, () => {
            expect(occupation).toHaveTextContent(expectedOrganisation)
        })
        
        const expectedActivities =
            "Deployed at the Jezero Crater on Planet Mars."
            + "Searching for signs of past life by studying certain types of rock."
            + "Collecting rock and soil samples to be picked up later by another rover."
            + "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere."
            + "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth."
            + "Making video recordings of Ingenuity's flights."
        
        it(`has activities: '${expectedActivities.substring(0, 24)}...'`, () => {
            expect(occupation).toHaveTextContent(expectedActivities)
        })
    })
    
    describe("the occupation at index 1", () => {
        let occupation: HTMLElement
        
        beforeEach(() => {
            occupation = within(main).getAllByRole("article")[1]
        })
        
        const expectedTitle = "Interplanetary Cinematography Agent"
        
        it(`has a title: '${expectedTitle}'`, () => {
            expect(occupation).toHaveTextContent(expectedTitle)
        })
        
        const expectedPeriod = "2020\u20132021"
        
        it(`has a period: '${expectedPeriod}'`, () => {
            expect(occupation).toHaveTextContent(expectedPeriod)
        })
        
        const expectedOrganisation = "The Interplanetary Space Agency"
        
        it(`has an organisation: '${expectedOrganisation}'`, () => {
            expect(occupation).toHaveTextContent(expectedOrganisation)
        })
        
        const expectedActivities =
            "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket."
            + "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour."
            + "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology."
            + "Made a high-resolution video recording of the parachute deployment during descent."
            + "Captured the first audio clip from the surface of another planet."
        
        it(`has activities: '${expectedActivities.substring(0, 24)}...'`, () => {
            expect(occupation).toHaveTextContent(expectedActivities)
        })
    })
    
    describe("the occupation at index 2", () => {
        let occupation: HTMLElement
        
        beforeEach(() => {
            occupation = within(main).getAllByRole("article")[2]
        })
        
        const expectedTitle = "Deviser"
        
        it(`has a title: '${expectedTitle}'`, () => {
            expect(occupation).toHaveTextContent(expectedTitle)
        })
        
        const expectedPeriod = "2012\u20132020"
        
        it(`has a period: '${expectedPeriod}'`, () => {
            expect(occupation).toHaveTextContent(expectedPeriod)
        })
        
        const expectedOrganisation = "NASA"
        
        it(`has an organisation: '${expectedOrganisation}'`, () => {
            expect(occupation).toHaveTextContent(expectedOrganisation)
        })
        
        const expectedActivities =
            "Based the design on the Curiosity rover."
            + "Chose durable wheels of aluminium with great traction."
            + "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna."
            + "Implemented a twin rover to be used for debugging on Planet Earth."
        
        it(`has activities: '${expectedActivities.substring(0, 24)}...'`, () => {
            expect(occupation).toHaveTextContent(expectedActivities)
        })
    })
})
