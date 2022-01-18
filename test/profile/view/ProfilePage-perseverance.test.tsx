import { content as perseverance } from "../../../main/profile/content/perseverance-dummy"
import { givenAProfilePageInDanish, theOccupation, theOccupations, thePortrait, theProfilePage } from "./helpers"

const options = {
    content: perseverance,
}

test("The profile page specifies the source of the portrait.", () => {
    // GIVEN a profile page.
    givenAProfilePageInDanish(options)
    
    // THEN it specifies the source of the portrait.
    expect(thePortrait()).toHaveAttribute("src", "perseverance-dummy.webp")
})

test("The profile page specifies the alternative text of the portrait.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it specifies an alternative text of the portrait in Danish.
    expect(thePortrait()).toHaveAttribute("alt", "Mit selvportræt. Courtesy NASA/JPL-Caltech.")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it specifies the alternative text of the portrait in English.
    expect(thePortrait()).toHaveAttribute("alt", "My self-portrait. Courtesy NASA/JPL-Caltech.")
})

test("The profile page displays a greeting.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays a greeting in Danish.
    expect(theProfilePage()).toHaveTextContent("Hej! Jeg hedder Perseverance.")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the greeting in English.
    expect(theProfilePage()).toHaveTextContent("Hi! My name is Perseverance.")
})

test("The profile page displays an area of expertise.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays an area of expertise in Danish.
    expect(theProfilePage()).toHaveTextContent("Og jeg er en Mars-rover.")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the area of expertise in English.
    expect(theProfilePage()).toHaveTextContent("And I'm a Mars rover.")
})

test("The profile page displays an age.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays an age in Danish.
    expect(theProfilePage()).toHaveTextContent("Alder" + "10 år")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the age in English.
    expect(theProfilePage()).toHaveTextContent("Age" + "10 years")
})

test("The profile page displays a residence.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays a residence in Danish.
    expect(theProfilePage()).toHaveTextContent("Bopæl" + "Jezero")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the residence in English.
    expect(theProfilePage()).toHaveTextContent("Residence" + "Jezero")
})

test("The profile page displays an academic discipline.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays an academic discipline in Danish.
    expect(theProfilePage()).toHaveTextContent("Faglig baggrund" + "Astrobiologi")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the academic discipline in English.
    expect(theProfilePage()).toHaveTextContent("Academic Discipline" + "Astrobiology")
})

test("The profile page displays work experience.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays work experience in Danish.
    expect(theProfilePage()).toHaveTextContent("Joberfaring" + "2 år")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays work experience in English.
    expect(theProfilePage()).toHaveTextContent("Work Experience" + "2 years")
})

test("The profile page displays a biography.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays a biography in Danish.
    expect(theProfilePage()).toHaveTextContent("Jeg elsker at grave i sandet på Mars!")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the biography in English.
    expect(theProfilePage()).toHaveTextContent("I enjoy digging through the Martian soil!")
})

test("The profile page displays a career of three occupations.", () => {
    // GIVEN a profile page.
    givenAProfilePageInDanish(options)
    
    // THEN it displays a career of three occupations.
    expect(theOccupations()).toHaveLength(3)
})

test("The profile page displays an 'Astrobiolog'/'Astrobiologist' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Astrobiolog" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Astrobiolog")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("juni 2021\u2013nu")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Udstationeret i Jezero-krateret på planeten Mars."
        + "Leder efter tegn på tidligere liv ved at nærstudere visse typer klippe."
        + "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover."
        + "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære."
        + "Medbringer helikopteren Ingenuity, som gennemførte den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden."
        + "Laver videooptagelser af Ingenuitys flyvninger.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Astrobiologist" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Astrobiologist")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("June 2021\u2013present")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Deployed at the Jezero Crater on Planet Mars."
        + "Searching for signs of past life by studying certain types of rock."
        + "Collecting rock and soil samples to be picked up later by another rover."
        + "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere."
        + "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth."
        + "Making video recordings of Ingenuity's flights.",
    )
})

test("The profile page displays a 'Interplanetarisk cinematografiagent'/'Interplanetary Cinematography Agent' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Interplanetarisk cinematografiagent" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Interplanetarisk cinematografiagent")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("juli 2020\u2013februar 2021")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Verdensrumsagenturet")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Opsendt fra Florida, planeten Jorden, om bord på en Atlas V-løfteraket."
        + "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen."
        + "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN)."
        + "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen."
        + "Optog det første lydklip fra en anden planets overflade.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Interplanetary Cinematography Agent" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Interplanetary Cinematography Agent")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("July 2020\u2013February 2021")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("The Interplanetary Space Agency")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket."
        + "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour."
        + "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology."
        + "Made a high-resolution video recording of the parachute deployment during descent."
        + "Captured the first audio clip from the surface of another planet.",
    )
})

test("The profile page displays a 'Opfinder'/'Deviser' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Opfinder" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Opfinder")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("december 2012\u2013juli 2020")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Baseret på Curiosity-roverens design."
        + "Valgte slidstærke hjul i aluminium med et godt vejgreb."
        + "Leverede redundans på datasignalet ved at medbringe to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde."
        + "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Deviser" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Deviser")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("December 2012\u2013July 2020")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Based the design on the Curiosity rover."
        + "Chose durable wheels of aluminium with great traction."
        + "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna."
        + "Implemented a twin rover to be used for debugging on Planet Earth.",
    )
})
