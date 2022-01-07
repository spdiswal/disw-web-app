import { content as curiosity } from "../../../main/profile/content/curiosity-dummy"
import { givenAProfilePageInDanish, theOccupation, theOccupations, thePortrait, theProfilePage } from "./helpers"

const options = {
    content: curiosity,
}

test("The profile page specifies the source of the portrait.", () => {
    // GIVEN a profile page.
    givenAProfilePageInDanish(options)
    
    // THEN it specifies the source of the portrait.
    expect(thePortrait()).toHaveAttribute("src", "curiosity-dummy.webp")
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
    expect(theProfilePage()).toHaveTextContent("Hej! Jeg hedder Curiosity.")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the greeting in English.
    expect(theProfilePage()).toHaveTextContent("Hi! My name is Curiosity.")
})

test("The profile page displays an ambition.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it displays an ambition in Danish.
    expect(theProfilePage()).toHaveTextContent("Og jeg er vild med klimaet på Mars!")
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN it displays the ambition in English.
    expect(theProfilePage()).toHaveTextContent("And the climate on Mars thrills me!")
})

test("The profile page displays a career of three occupations.", () => {
    // GIVEN a profile page.
    givenAProfilePageInDanish(options)
    
    // THEN it displays a career of three occupations.
    expect(theOccupations()).toHaveLength(3)
})

test("The profile page displays a 'Geolog'/'Geologist' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Geolog" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Geolog")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("2012\u2013nu")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Udstationeret i Gale-krateret på planeten Mars."
        + "Undersøger den kemiske sammensætning af materialet på Mars' overflade."
        + "Indsamler og analyserer klippestykker og jordprøver."
        + "Nærstuderer vandets cyklus på Mars."
        + "Måler den radioaktive stråling på Mars' overflade, hvilket har afsløret dens sundhedsrisiko for mennesker på Mars.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Geologist" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Geologist")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("2012\u2013present")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Deployed at the Gale Crater on Planet Mars."
        + "Investigating the chemical composition of the material on the Martian surface."
        + "Collecting and analysing rock and soil samples."
        + "Studying the water cycles on Mars."
        + "Measuring the surface radiation on Mars, uncovering its great health risks for humans on Mars.",
    )
})

test("The profile page displays a 'Interplanetarisk turist'/'Interplanetary Cruiser' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Interplanetarisk turist" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Interplanetarisk turist")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("2011\u20132012")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Verdensrums\u00ADagenturet")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Sendt til vejrs fra den jordiske opsendelsesbase Cape Canaveral om bord på en Atlas V-raket."
        + "Målte den kosmiske stråling i det interplanetariske rum."
        + "Gennemførte otte måneders rumrejse."
        + "Havde et fantastisk samarbejde med Mars Reconnaissance Orbiter."
        + "Gennemførte en blød landing på Mars' overflade ved hjælp af en sky crane touchdown-manøvre med rumfartøjet.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Interplanetary Cruiser" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Interplanetary Cruiser")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("2011\u20132012")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("The Interplanetary Space Agency")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Launched from the terrestrial site of Cape Canaveral aboard an Atlas V rocket."
        + "Measured the cosmic radiation in interplanetary space."
        + "Completed an eight-month journey through space."
        + "Had a wonderful teamwork with the Mars Reconnaissance Orbiter."
        + "Soft landed onto the Martian surface using a sky crane touchdown manoeuvre with the spacecraft.",
    )
})

test("The profile page displays a 'Udruger'/'Hatcher' occupation.", () => {
    // GIVEN a profile page in Danish.
    const driver = givenAProfilePageInDanish(options)
    
    // THEN it has an occupation with an accessible name in Danish.
    const danishOccupation = theOccupation({ name: "Udruger" })
    expect(danishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("Udruger")
    
    // AND it displays the period of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("2004\u20132011")
    
    // AND it displays the organisation of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in Danish.
    expect(danishOccupation).toHaveTextContent(
        "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under sandstorme."
        + "Valgte en vippeboogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte."
        + "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur."
        + "Implementerede to tvillingerovere til fejlsøgning på planeten Jorden.",
    )
    
    // WHEN rendering the profile page in English.
    driver.whenRenderingTheProfilePageInEnglish()
    
    // THEN the occupation has an accessible name in English.
    const englishOccupation = theOccupation({ name: "Hatcher" })
    expect(englishOccupation).toBeInTheDocument()
    
    // AND it displays the title of the occupation in English.
    expect(englishOccupation).toHaveTextContent("Hatcher")
    
    // AND it displays the period of the occupation in English.
    expect(englishOccupation).toHaveTextContent("2004\u20132011")
    
    // AND it displays the organisation of the occupation in English.
    expect(englishOccupation).toHaveTextContent("NASA")
    
    // AND it displays the activities of the occupation in English.
    expect(englishOccupation).toHaveTextContent(
        "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms."
        + "Chose rocker-bogie mobility gear to climb steep sand dunes and withstand tilts without overturning."
        + "Acquired a heat rejection system to maintain optimal operation temperatures."
        + "Implemented two twin rovers to be used for debugging on Planet Earth.",
    )
})
