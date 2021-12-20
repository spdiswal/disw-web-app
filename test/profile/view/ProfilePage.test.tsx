import { languages, multilingual } from "+i18n"
import { ProfilePage } from "+profile"
import { render, screen, within } from "@testing-library/preact"
import { content as curiosity } from "../../../main/profile/content/curiosity-dummy"
import { content as perseverance } from "../../../main/profile/content/perseverance-dummy"

describe.each(languages)("when the active language is '%s'", (activeLanguage) => {
    describe.each([
        curiosity,
        perseverance,
    ])("a '$name' profile page", (content) => {
        const { picture, name, ambition, career } = content
        
        let main: HTMLElement
        
        beforeEach(() => {
            render((
                <ProfilePage
                    content={content}
                    activeLanguage={activeLanguage}
                />
            ))
            
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
            
            const expectedAlternativeText =
                picture.caption.resolveFor(activeLanguage)
            
            it(`has an alternative text: '${expectedAlternativeText}'`, () => {
                expect(img).toHaveAttribute("alt", expectedAlternativeText)
            })
        })
        
        const expectedGreeting = multilingual({
            da: `Hej! Jeg hedder ${name}.`,
            en: `Hi! My name is ${name}.`,
        }).resolveFor(activeLanguage)
        
        it(`has a greeting: '${expectedGreeting}'`, () => {
            expect(main).toHaveTextContent(expectedGreeting)
        })
        
        const expectedAmbition = ambition.resolveFor(activeLanguage)
        
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
                occupationName: occupation.title.resolveFor(activeLanguage),
                index,
                ...occupation,
            })),
        )("the '$occupationName' occupation", (occupation) => {
            const {
                index,
                title,
                organisation,
                period,
                activities,
            } = occupation
            
            let article: HTMLElement
            
            beforeEach(() => {
                article = within(main).getAllByRole("article")[index]
            })
            
            const expectedTitle = title.resolveFor(activeLanguage)
            
            it(`has a title: '${expectedTitle}'`, () => {
                expect(article).toHaveTextContent(expectedTitle)
            })
            
            const expectedOrganisation =
                organisation.resolveFor(activeLanguage)
            
            it(`has an organisation: '${expectedOrganisation}'`, () => {
                expect(article).toHaveTextContent(expectedOrganisation)
            })
            
            const thePresent = multilingual({
                da: "nu",
                en: "present",
            }).resolveFor(activeLanguage)
            
            const periodStartYear = period.since.getUTCFullYear().toString()
            const periodEndYear = period.until?.getUTCFullYear().toString()
                ?? thePresent
            
            const expectedPeriod = `${periodStartYear}\u2013${periodEndYear}`
            
            it(`has a period: '${expectedPeriod}'`, () => {
                expect(article).toHaveTextContent(expectedPeriod)
            })
            
            const expectedActivities = activities
                .map((activity) => activity.description)
                .map((description) => description.resolveFor(activeLanguage))
                .join("")
            
            it(`has activities: '${expectedActivities.substring(0, 24)}...'`, () => {
                expect(article).toHaveTextContent(expectedActivities)
            })
        })
    })
})
