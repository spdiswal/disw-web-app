import { ProfilePage } from "+profile"
import { render, screen, within } from "@testing-library/preact"
import { content as curiosity } from "../main/profile/content/curiosity-dummy"
import { content as perseverance } from "../main/profile/content/perseverance-dummy"

describe.each([
    curiosity,
    perseverance,
])("a '$name' profile page", (content) => {
    const { picture, name, ambition, career } = content
    
    let main: HTMLElement
    
    beforeEach(() => {
        render(<ProfilePage content={content}/>)
        main = screen.getByRole("main")
    })
    
    describe("the picture", () => {
        let img: HTMLElement
        
        beforeEach(() => {
            img = within(main).getByRole("img")
        })
        
        const expectedPictureAssetUrl = picture.assetUrl
        
        it(`has an image source: '${expectedPictureAssetUrl}'`, () => {
            expect(img).toHaveAttribute("src", expectedPictureAssetUrl)
        })
        
        const expectedAlternativeText = picture.caption
        
        it(`has an alternative text: '${expectedAlternativeText}'`, () => {
            expect(img).toHaveAttribute("alt", expectedAlternativeText)
        })
    })
    
    const expectedGreeting = `Hi! My name is ${name}.`
    
    it(`has a greeting: '${expectedGreeting}'`, () => {
        expect(main).toHaveTextContent(expectedGreeting)
    })
    
    const expectedAmbition = ambition
    
    it(`has an ambition: '${expectedAmbition}'`, () => {
        expect(main).toHaveTextContent(expectedAmbition)
    })
    
    const expectedOccupationCount = career.length
    
    it(`has ${expectedOccupationCount} occupation(s)`, () => {
        expect(within(main).getAllByRole("article"))
            .toHaveLength(expectedOccupationCount)
    })
    
    describe.each(
        career.map((occupation, index) => ({
            index,
            ...occupation,
        })),
    )("the '$title' occupation", (occupation) => {
        const { index, title, organisation, period, activities } = occupation
        
        let article: HTMLElement
        
        beforeEach(() => {
            article = within(main).getAllByRole("article")[index]
        })
        
        const expectedTitle = title
        
        it(`has a title: '${expectedTitle}'`, () => {
            expect(article).toHaveTextContent(expectedTitle)
        })
        
        const periodStartYear = period.since.getUTCFullYear().toString()
        const periodEndYear = period.until?.getUTCFullYear().toString() ?? "present"
        const expectedPeriod = `${periodStartYear}\u2013${periodEndYear}`
        
        it(`has a period: '${expectedPeriod}'`, () => {
            expect(article).toHaveTextContent(expectedPeriod)
        })
        
        const expectedOrganisation = organisation
        
        it(`has an organisation: '${expectedOrganisation}'`, () => {
            expect(article).toHaveTextContent(expectedOrganisation)
        })
        
        const expectedActivities = activities
            .map((activity) => activity.description)
            .join("")
        
        it(`has activities: '${expectedActivities.substring(0, 24)}...'`, () => {
            expect(article).toHaveTextContent(expectedActivities)
        })
    })
})
