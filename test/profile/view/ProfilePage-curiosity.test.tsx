import { content as curiosity } from "../../../main/profile/content/curiosity-dummy"
import { givenAProfilePage, theOccupation, theOccupations, thePortrait, theProfilePage } from "./helpers/ProfilePage-helpers"

test("The source of the portrait is 'curiosity-dummy.webp'.", async () => {
    // GIVEN the profile page for Curiosity.
    givenAProfilePage({ content: curiosity })
    
    // THEN the source of the portrait is 'curiosity-dummy.webp'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("src", "curiosity-dummy.webp")
})

test("The alternative text of the portrait is 'Mit selvportræt. Courtesy NASA/JPL-Caltech.' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the alternative text of the portrait is 'Mit selvportræt. Courtesy NASA/JPL-Caltech.'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("alt", "Mit selvportræt. Courtesy NASA/JPL-Caltech.")
})

test("The alternative text of the portrait is 'My self-portrait. Courtesy NASA/JPL-Caltech.' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the alternative text of the portrait is 'My self-portrait. Courtesy NASA/JPL-Caltech.'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("alt", "My self-portrait. Courtesy NASA/JPL-Caltech.")
})

test("The greeting says 'Hej! Jeg hedder Curiosity.' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the greeting says 'Hej! Jeg hedder Curiosity.'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Hej! Jeg hedder Curiosity.")
})

test("The greeting says 'Hi! My name is Curiosity.' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the greeting says 'Hi! My name is Curiosity.'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Hi! My name is Curiosity.")
})

test("The ambition says 'Og jeg er vild med klimaet på Mars!' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the ambition says 'Og jeg er vild med klimaet på Mars!'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Og jeg er vild med klimaet på Mars!")
})

test("The ambition says 'And the climate on Mars thrills me!' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the ambition says 'And the climate on Mars thrills me!'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("And the climate on Mars thrills me!")
})

test("The career has three occupations.", async () => {
    // GIVEN the profile page for Curiosity.
    givenAProfilePage({ content: curiosity })
    
    // THEN the career has three occupations.
    await expect(theOccupations()).resolves.toHaveLength(3)
})

test("The first occupation is labelled 'Geolog' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the first occupation is labelled 'Geolog'.
    await expect(theOccupation({ name: "Geolog" })).resolves
        .toBeInTheDocument()
})

test("The first occupation is labelled 'Geologist' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the first occupation is labelled 'Geologist'.
    await expect(theOccupation({ name: "Geologist" })).resolves
        .toBeInTheDocument()
})

test("The 'Geolog' occupation has a period that says '2012–nu' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Geolog' occupation has a period that says '2012–nu'.
    await expect(theOccupation({ name: "Geolog" })).resolves
        .toHaveTextContent("2012\u2013nu")
})

test("The 'Geologist' occupation has a period that says '2012–present' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Geologist' occupation has a period that says '2012–present'.
    await expect(theOccupation({ name: "Geologist" })).resolves
        .toHaveTextContent("2012\u2013present")
})

test("The 'Geolog' occupation has an organisation that says 'NASA' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Geolog' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Geolog" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Geologist' occupation has an organisation that says 'NASA' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Geologist' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Geologist" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Geolog' occupation has five activities in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Geolog' occupation has five activities.
    await expect(theOccupation({ name: "Geolog" })).resolves
        .toHaveTextContent(
            "Udstationeret i Gale-krateret på planeten Mars."
            + "Undersøger den kemiske sammensætning af materialet på Mars' overflade."
            + "Indsamler og analyserer klippestykker og jordprøver."
            + "Nærstuderer vandets cyklus på Mars."
            + "Måler den radioaktive stråling på Mars' overflade, hvilket har afsløret dens sundhedsrisiko for mennesker på Mars.",
        )
})

test("The 'Geologist' occupation has five activities in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Geologist' occupation has five activities.
    await expect(theOccupation({ name: "Geologist" })).resolves
        .toHaveTextContent(
            "Deployed at the Gale Crater on Planet Mars."
            + "Investigating the chemical composition of the material on the Martian surface."
            + "Collecting and analysing rock and soil samples."
            + "Studying the water cycles on Mars."
            + "Measuring the surface radiation on Mars, uncovering its great health risks for humans on Mars.",
        )
})

test("The second occupation is labelled 'Interplanetarisk turist' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the second occupation is labelled 'Interplanetarisk turist'.
    await expect(theOccupation({ name: "Interplanetarisk turist" })).resolves
        .toBeInTheDocument()
})

test("The second occupation is labelled 'Interplanetary Cruiser' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the second occupation is labelled 'Interplanetary Cruiser'.
    await expect(theOccupation({ name: "Interplanetary Cruiser" })).resolves
        .toBeInTheDocument()
})

test("The 'Interplanetarisk turist' occupation has a period that says '2011–2012' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk turist' occupation has a period that says '2011–2012'.
    await expect(theOccupation({ name: "Interplanetarisk turist" })).resolves
        .toHaveTextContent("2011\u20132012")
})

test("The 'Interplanetary Cruiser' occupation has a period that says '2011–2012' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cruiser' occupation has a period that says '2011–2012'.
    await expect(theOccupation({ name: "Interplanetary Cruiser" })).resolves
        .toHaveTextContent("2011\u20132012")
})

test("The 'Interplanetarisk turist' occupation has an organisation that says 'Verdensrums-agenturet' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk turist' occupation has an organisation that says 'Verdensrums-agenturet'.
    await expect(theOccupation({ name: "Interplanetarisk turist" })).resolves
        .toHaveTextContent("Verdensrums\u00ADagenturet")
})

test("The 'Interplanetary Cruiser' occupation has an organisation that says 'The Interplanetary Space Agency' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cruiser' occupation has an organisation that says 'The Interplanetary Space Agency'.
    await expect(theOccupation({ name: "Interplanetary Cruiser" })).resolves
        .toHaveTextContent("The Interplanetary Space Agency")
})

test("The 'Interplanetarisk turist' occupation has five activities in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk turist' occupation has five activities.
    await expect(theOccupation({ name: "Interplanetarisk turist" })).resolves
        .toHaveTextContent(
            "Sendt til vejrs fra den jordiske opsendelsesbase Cape Canaveral om bord på en Atlas V-raket."
            + "Målte den kosmiske stråling i det interplanetariske rum."
            + "Gennemførte otte måneders rumrejse."
            + "Havde et fantastisk samarbejde med Mars Reconnaissance Orbiter."
            + "Gennemførte en blød landing på Mars' overflade ved hjælp af en sky crane touchdown-manøvre med rumfartøjet.",
        )
})

test("The 'Interplanetary Cruiser' occupation has five activities in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cruiser' occupation has five activities.
    await expect(theOccupation({ name: "Interplanetary Cruiser" })).resolves
        .toHaveTextContent(
            "Launched from the terrestrial site of Cape Canaveral aboard an Atlas V rocket."
            + "Measured the cosmic radiation in interplanetary space."
            + "Completed an eight-month journey through space."
            + "Had a wonderful teamwork with the Mars Reconnaissance Orbiter."
            + "Soft landed onto the Martian surface using a sky crane touchdown manoeuvre with the spacecraft.",
        )
})

test("The third occupation is labelled 'Udruger' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the third occupation is labelled 'Udruger'.
    await expect(theOccupation({ name: "Udruger" })).resolves
        .toBeInTheDocument()
})

test("The third occupation is labelled 'Hatcher' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the third occupation is labelled 'Hatcher'.
    await expect(theOccupation({ name: "Hatcher" })).resolves
        .toBeInTheDocument()
})

test("The 'Udruger' occupation has a period that says '2004–2011' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Udruger' occupation has a period that says '2004–2011'.
    await expect(theOccupation({ name: "Udruger" })).resolves
        .toHaveTextContent("2004\u20132011")
})

test("The 'Hatcher' occupation has a period that says '2004–2011' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Hatcher' occupation has a period that says '2004–2011'.
    await expect(theOccupation({ name: "Hatcher" })).resolves
        .toHaveTextContent("2004\u20132011")
})

test("The 'Udruger' occupation has an organisation that says 'NASA' in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Udruger' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Udruger" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Hatcher' occupation has an organisation that says 'NASA' in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Hatcher' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Hatcher" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Udruger' occupation has four activities in Danish.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is Danish.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "da",
    })
    
    // THEN the 'Udruger' occupation has four activities.
    await expect(theOccupation({ name: "Udruger" })).resolves
        .toHaveTextContent(
            "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under sandstorme."
            + "Valgte en vippeboogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte."
            + "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur."
            + "Implementerede to tvillingerovere til fejlsøgning på planeten Jorden.",
        )
})

test("The 'Hatcher' occupation has four activities in English.", async () => {
    // GIVEN the profile page for Curiosity.
    // AND the active language is English.
    givenAProfilePage({
        content: curiosity,
        activeLanguage: "en",
    })
    
    // THEN the 'Hatcher' occupation has four activities.
    await expect(theOccupation({ name: "Hatcher" })).resolves
        .toHaveTextContent(
            "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms."
            + "Chose rocker-bogie mobility gear to climb steep sand dunes and withstand tilts without overturning."
            + "Acquired a heat rejection system to maintain optimal operation temperatures."
            + "Implemented two twin rovers to be used for debugging on Planet Earth.",
        )
})
