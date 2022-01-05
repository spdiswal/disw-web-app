import { content as perseverance } from "../../../main/profile/content/perseverance-dummy"
import { givenAProfilePage, theOccupation, theOccupations, thePortrait, theProfilePage } from "./helpers/ProfilePage-helpers"

test("The source of the portrait is 'perseverance-dummy.webp'.", async () => {
    // GIVEN the profile page for Perseverance.
    givenAProfilePage({ content: perseverance })
    
    // THEN the source of the portrait is 'perseverance-dummy.webp'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("src", "perseverance-dummy.webp")
})

test("The alternative text of the portrait is 'Mit selvportræt. Courtesy NASA/JPL-Caltech.' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the alternative text of the portrait is 'Mit selvportræt. Courtesy NASA/JPL-Caltech.'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("alt", "Mit selvportræt. Courtesy NASA/JPL-Caltech.")
})

test("The alternative text of the portrait is 'My self-portrait. Courtesy NASA/JPL-Caltech.' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the alternative text of the portrait is 'My self-portrait. Courtesy NASA/JPL-Caltech.'.
    await expect(thePortrait()).resolves
        .toHaveAttribute("alt", "My self-portrait. Courtesy NASA/JPL-Caltech.")
})

test("The greeting says 'Hej! Jeg hedder Perseverance.' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the greeting says 'Hej! Jeg hedder Perseverance.'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Hej! Jeg hedder Perseverance.")
})

test("The greeting says 'Hi! My name is Perseverance.' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the greeting says 'Hi! My name is Perseverance.'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Hi! My name is Perseverance.")
})

test("The ambition says 'Og jeg elsker at grave i sandet på Mars!' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the ambition says 'Og jeg elsker at grave i sandet på Mars!'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("Og jeg elsker at grave i sandet på Mars!")
})

test("The ambition says 'And I enjoy digging through the Martian soil!' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the ambition says 'And I enjoy digging through the Martian soil!'.
    await expect(theProfilePage()).resolves
        .toHaveTextContent("And I enjoy digging through the Martian soil!")
})

test("The career has three occupations.", async () => {
    // GIVEN the profile page for Perseverance.
    givenAProfilePage({ content: perseverance })
    
    // THEN the career has three occupations.
    await expect(theOccupations()).resolves.toHaveLength(3)
})

test("The first occupation is labelled 'Astrobiolog' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the first occupation is labelled 'Astrobiolog'.
    await expect(theOccupation({ name: "Astrobiolog" })).resolves
        .toBeInTheDocument()
})

test("The first occupation is labelled 'Astrobiologist' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the first occupation is labelled 'Astrobiologist'.
    await expect(theOccupation({ name: "Astrobiologist" })).resolves
        .toBeInTheDocument()
})

test("The 'Astrobiolog' occupation has a period that says '2021–nu' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Astrobiolog' occupation has a period that says '2021–nu'.
    await expect(theOccupation({ name: "Astrobiolog" })).resolves
        .toHaveTextContent("2021\u2013nu")
})

test("The 'Astrobiologist' occupation has a period that says '2021–present' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Astrobiologist' occupation has a period that says '2021–present'.
    await expect(theOccupation({ name: "Astrobiologist" })).resolves
        .toHaveTextContent("2021\u2013present")
})

test("The 'Astrobiolog' occupation has an organisation that says 'NASA' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Astrobiolog' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Astrobiolog" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Astrobiologist' occupation has an organisation that says 'NASA' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Astrobiologist' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Astrobiologist" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Astrobiolog' occupation has six activities in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Astrobiolog' occupation has six activities.
    await expect(theOccupation({ name: "Astrobiolog" })).resolves
        .toHaveTextContent(
            "Udstationeret i Jezero-krateret på planeten Mars."
            + "Leder efter tegn på tidligere liv ved at nærstudere visse typer klippe."
            + "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover."
            + "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære."
            + "Medbringer helikopteren Ingenuity, som gennemførte den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden."
            + "Laver videooptagelser af Ingenuitys flyvninger.",
        )
})

test("The 'Astrobiologist' occupation has six activities in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Astrobiologist' occupation has six activities.
    await expect(theOccupation({ name: "Astrobiologist" })).resolves
        .toHaveTextContent(
            "Deployed at the Jezero Crater on Planet Mars."
            + "Searching for signs of past life by studying certain types of rock."
            + "Collecting rock and soil samples to be picked up later by another rover."
            + "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere."
            + "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth."
            + "Making video recordings of Ingenuity's flights.",
        )
})

test("The second occupation is labelled 'Interplanetarisk cinematografi-agent' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the second occupation is labelled 'Interplanetarisk cinematografi-agent'.
    await expect(theOccupation({ name: "Interplanetarisk cinematografi\u00ADagent" })).resolves
        .toBeInTheDocument()
})

test("The second occupation is labelled 'Interplanetary Cinematography Agent' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the second occupation is labelled 'Interplanetary Cinematography Agent'.
    await expect(theOccupation({ name: "Interplanetary Cinematography Agent" })).resolves
        .toBeInTheDocument()
})

test("The 'Interplanetarisk cinematografi-agent' occupation has a period that says '2020–2021' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk cinematografi-agent' occupation has a period that says '2020–2021'.
    await expect(theOccupation({ name: "Interplanetarisk cinematografi\u00ADagent" })).resolves
        .toHaveTextContent("2020\u20132021")
})

test("The 'Interplanetary Cinematography Agent' occupation has a period that says '2020–2021' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cinematography Agent' occupation has a period that says '2020–2021'.
    await expect(theOccupation({ name: "Interplanetary Cinematography Agent" })).resolves
        .toHaveTextContent("2020\u20132021")
})

test("The 'Interplanetarisk cinematografi-agent' occupation has an organisation that says 'Verdensrums-agenturet' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk cinematografi-agent' occupation has an organisation that says 'Verdensrums-agenturet'.
    await expect(theOccupation({ name: "Interplanetarisk cinematografi\u00ADagent" })).resolves
        .toHaveTextContent("Verdensrums\u00ADagenturet")
})

test("The 'Interplanetary Cinematography Agent' occupation has an organisation that says 'The Interplanetary Space Agency' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cinematography Agent' occupation has an organisation that says 'The Interplanetary Space Agency'.
    await expect(theOccupation({ name: "Interplanetary Cinematography Agent" })).resolves
        .toHaveTextContent("The Interplanetary Space Agency")
})

test("The 'Interplanetarisk cinematografi-agent' occupation has five activities in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Interplanetarisk cinematografi-agent' occupation has five activities.
    await expect(theOccupation({ name: "Interplanetarisk cinematografi\u00ADagent" })).resolves
        .toHaveTextContent(
            "Opsendt fra Florida, planeten Jorden, om bord på en Atlas V-løfteraket."
            + "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen."
            + "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN)."
            + "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen."
            + "Optog det første lydklip fra en anden planets overflade.",
        )
})

test("The 'Interplanetary Cinematography Agent' occupation has five activities in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Interplanetary Cinematography Agent' occupation has five activities.
    await expect(theOccupation({ name: "Interplanetary Cinematography Agent" })).resolves
        .toHaveTextContent(
            "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket."
            + "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour."
            + "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology."
            + "Made a high-resolution video recording of the parachute deployment during descent."
            + "Captured the first audio clip from the surface of another planet.",
        )
})

test("The third occupation is labelled 'Opfinder' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the third occupation is labelled 'Opfinder'.
    await expect(theOccupation({ name: "Opfinder" })).resolves
        .toBeInTheDocument()
})

test("The third occupation is labelled 'Deviser' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the third occupation is labelled 'Deviser'.
    await expect(theOccupation({ name: "Deviser" })).resolves
        .toBeInTheDocument()
})

test("The 'Opfinder' occupation has a period that says '2012–2020' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Opfinder' occupation has a period that says '2012–2020'.
    await expect(theOccupation({ name: "Opfinder" })).resolves
        .toHaveTextContent("2012\u20132020")
})

test("The 'Deviser' occupation has a period that says '2012–2020' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Deviser' occupation has a period that says '2012–2020'.
    await expect(theOccupation({ name: "Deviser" })).resolves
        .toHaveTextContent("2012\u20132020")
})

test("The 'Opfinder' occupation has an organisation that says 'NASA' in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Opfinder' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Opfinder" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Deviser' occupation has an organisation that says 'NASA' in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Deviser' occupation has an organisation that says 'NASA'.
    await expect(theOccupation({ name: "Deviser" })).resolves
        .toHaveTextContent("NASA")
})

test("The 'Opfinder' occupation has four activities in Danish.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is Danish.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "da",
    })
    
    // THEN the 'Opfinder' occupation has four activities.
    await expect(theOccupation({ name: "Opfinder" })).resolves
        .toHaveTextContent(
            "Baseret på Curiosity-roverens design."
            + "Valgte slidstærke hjul i aluminium med et godt vejgreb."
            + "Leverede redundans på datasignalet ved at medbringe to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde."
            + "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
        )
})

test("The 'Deviser' occupation has four activities in English.", async () => {
    // GIVEN the profile page for Perseverance.
    // AND the active language is English.
    givenAProfilePage({
        content: perseverance,
        activeLanguage: "en",
    })
    
    // THEN the 'Deviser' occupation has four activities.
    await expect(theOccupation({ name: "Deviser" })).resolves
        .toHaveTextContent(
            "Based the design on the Curiosity rover."
            + "Chose durable wheels of aluminium with great traction."
            + "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna."
            + "Implemented a twin rover to be used for debugging on Planet Earth.",
        )
})
