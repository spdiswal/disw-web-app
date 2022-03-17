import { FooterContent, HeaderContent, MainContent } from "+content"
import { LocaleProvider } from "+i18n"
import { render, screen, within } from "@testing-library/preact"

test("The content specifies the fallback source of the hero image.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content specifies the fallback source of the hero image.
    expect(content.getHeroImage()).toHaveAttribute("src", "perseverance-fallback.jpeg")
})

test("The content specifies the alternative text of the hero image.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content specifies an alternative text of the hero image in Danish.
    expect(content.getHeroImage()).toHaveAttribute("alt", "Mit selvportræt på Mars. Jeg har boret to huller i et klippestykke foran mig og lavet hjulspor i det røde sand. Horisonten er en smule diset. Courtesy NASA/JPL-Caltech.")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content specifies the alternative text of the hero image in English.
    expect(content.getHeroImage()).toHaveAttribute("alt", "My self-portrait on Mars. I have drilled two holes in a rock in front of me and made wheel tracks in the red soil. The horizon is slightly hazy. Courtesy NASA/JPL-Caltech.")
})

test("The content displays a greeting.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays a greeting in Danish.
    expect(content.getHeaderContent()).toHaveTextContent("Hej! Jeg hedder" + "Perseverance")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays a greeting in English.
    expect(content.getHeaderContent()).toHaveTextContent("Hi! My name is" + "Perseverance")
})

test("The content displays a biography.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays a biography in Danish.
    expect(content.getMainContent()).toHaveTextContent(
        "— og jeg er astrobiolog på Mars."
        + "Jeg elsker at grave i sandet på Mars! Og jeg drømmer om at opdage liv på den røde planet.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays the biography in English.
    expect(content.getMainContent()).toHaveTextContent(
        "— and I'm an astrobiologist on Mars."
        + "I enjoy digging through the Martian soil! And I dream about discovering life on the Red Planet.",
    )
})

test("The content displays an age.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays an age in Danish.
    expect(content.getMainContent()).toHaveTextContent("Alder" + "10 år")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays the age in English.
    expect(content.getMainContent()).toHaveTextContent("Age" + "10 years")
})

test("The content displays a residence.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays a residence in Danish.
    expect(content.getMainContent()).toHaveTextContent("Bopæl" + "Jezero")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays the residence in English.
    expect(content.getMainContent()).toHaveTextContent("Residence" + "Jezero")
})

test("The content displays a discipline.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays a discipline in Danish.
    expect(content.getMainContent()).toHaveTextContent("Faglig baggrund" + "Astrobiologi")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays the discipline in English.
    expect(content.getMainContent()).toHaveTextContent("Academic Discipline" + "Astrobiology")
})

test("The content displays experience.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays experience in Danish.
    expect(content.getMainContent()).toHaveTextContent("Joberfaring" + "2 år")
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the content displays the experience in English.
    expect(content.getMainContent()).toHaveTextContent("Work Experience" + "2 years")
})

test("The content displays a career of five occupations.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays a career of five occupations.
    expect(content.getOccupations()).toHaveLength(5)
})

test("The content displays an 'Astrobiolog'/'Astrobiologist' occupation.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content has an occupation with an accessible name in Danish.
    const occupation = content.getOccupation("Astrobiolog")
    expect(occupation).toBeInTheDocument()
    
    // AND it displays the period of the occupation in Danish.
    expect(occupation).toHaveTextContent("december 2021\u2013")
    
    // AND it displays the organisation of the occupation in Danish.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "Røde Planet" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in Danish.
    expect(occupation).toHaveTextContent(
        "Udstationeret i Jezero-krateret på planeten Mars."
        + "Analyserer den kemiske sammensætning af materialet på Mars' overflade."
        + "Leder efter tegn på tidligere liv ved at kigge efter biosignaturer i materialet, fx fossiler og organiske molekyler."
        + "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover."
        + "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære."
        + "Observerer vejrforholdene på Mars' overflade ved hjælp af sensorer, der måler temperatur, vindhastighed, relativ luftfugtighed, støvkorn og radioaktiv stråling.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the occupation has an accessible name in English.
    expect(occupation).toHaveAccessibleName("Astrobiologist")
    
    // AND it displays the period of the occupation in English.
    expect(occupation).toHaveTextContent("December 2021\u2013")
    
    // AND it displays the organisation of the occupation in English.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "Red Planet" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in English.
    expect(occupation).toHaveTextContent(
        "Deployed at the Jezero Crater on Planet Mars."
        + "Analysing the chemical composition of the material on the Martian surface."
        + "Searching for signs of past life by looking for biosignatures in this material, e.g. fossils and organic matter."
        + "Collecting rock and soil samples to be picked up later by another rover."
        + "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere."
        + "Observing the surface weather on Mars with a set of sensors that measure the temperature, wind speed, relative humidity, dust particles, and radiation.",
    )
})

test("The content displays a 'Førsteofficer'/'First Officer' occupation.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content has an occupation with an accessible name in Danish.
    const occupation = content.getOccupation("Førsteofficer")
    expect(occupation).toBeInTheDocument()
    
    // AND it displays the period of the occupation in Danish.
    expect(occupation).toHaveTextContent("marts 2021\u2013oktober 2021")
    
    // AND it displays the organisation of the occupation in Danish.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in Danish.
    expect(occupation).toHaveTextContent(
        "Hjalp helikopteren Ingenuity med at gennemføre den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden."
        + "Lavede videooptagelser af Ingenuitys flyvninger."
        + "Optog det første lydklip fra en anden planets overflade, herunder den summen der blev skabt af Ingenuitys rotorer.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the occupation has an accessible name in English.
    expect(occupation).toHaveAccessibleName("First Officer")
    
    // AND it displays the period of the occupation in English.
    expect(occupation).toHaveTextContent("March 2021\u2013October 2021")
    
    // AND it displays the organisation of the occupation in English.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in English.
    expect(occupation).toHaveTextContent(
        "Assisted the Ingenuity rotorcraft in accomplishing the very first man-made, powered flight on another celestial body than Earth."
        + "Made video recordings of Ingenuity's flights."
        + "Captured the first audio clip from the surface of another planet, including the hum made by Ingenuity's rotor blades.",
    )
})

test("The content displays an 'Interplanetarisk agent'/'Interplanetary Agent' occupation.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content has an occupation with an accessible name in Danish.
    const occupation = content.getOccupation("Interplanetarisk agent")
    expect(occupation).toBeInTheDocument()
    
    // AND it displays the period of the occupation in Danish.
    expect(occupation).toHaveTextContent("august 2020\u2013februar 2021")
    
    // AND it displays the organisation of the occupation in Danish.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "Verdensrumsagenturet" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in Danish.
    expect(occupation).toHaveTextContent(
        "Sendt til vejrs fra Cape Canaveral, Florida, om bord på en Atlas V-løfteraket."
        + "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen."
        + "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN)."
        + "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the occupation has an accessible name in English.
    expect(occupation).toHaveAccessibleName("Interplanetary Agent")
    
    // AND it displays the period of the occupation in English.
    expect(occupation).toHaveTextContent("August 2020\u2013February 2021")
    
    // AND it displays the organisation of the occupation in English.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "The Interplanetary Space Agency" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in English.
    expect(occupation).toHaveTextContent(
        "Launched from Cape Canaveral, Florida, aboard an Atlas V carrier rocket."
        + "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour."
        + "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology."
        + "Made a high-resolution video recording of the parachute deployment during descent.",
    )
})

test("The content displays a 'Kandidat i kontinuitet'/'MSc in Continuity' occupation.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content has an occupation with an accessible name in Danish.
    const occupation = content.getOccupation("Kandidat i kontinuitet")
    expect(occupation).toBeInTheDocument()
    
    // AND it displays the period of the occupation in Danish.
    expect(occupation).toHaveTextContent("september 2017\u2013juni 2020")
    
    // AND it displays the organisation of the occupation in Danish.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in Danish.
    expect(occupation).toHaveTextContent(
        "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under støvstorme."
        + "Leverede redundans på datasignalet med to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde."
        + "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the occupation has an accessible name in English.
    expect(occupation).toHaveAccessibleName("MSc in Continuity")
    
    // AND it displays the period of the occupation in English.
    expect(occupation).toHaveTextContent("September 2017\u2013June 2020")
    
    // AND it displays the organisation of the occupation in English.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in English.
    expect(occupation).toHaveTextContent(
        "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms."
        + "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna."
        + "Implemented a twin rover to be used for debugging on Planet Earth.",
    )
})

test("The content displays a 'Bachelor i roverdesign'/'BSc in Rover Design' occupation.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content has an occupation with an accessible name in Danish.
    const occupation = content.getOccupation("Bachelor i roverdesign")
    expect(occupation).toBeInTheDocument()
    
    // AND it displays the period of the occupation in Danish.
    expect(occupation).toHaveTextContent("juli 2013\u2013maj 2017")
    
    // AND it displays the organisation of the occupation in Danish.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in Danish.
    expect(occupation).toHaveTextContent(
        "Valgte slidstærke hjul i aluminium med et godt vejgreb."
        + "Implementerede en sekshjulet rocker-bogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte."
        + "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur.",
    )
    
    // WHEN changing the locale to English.
    content.changeToEnglishLocale()
    
    // THEN the occupation has an accessible name in English.
    expect(occupation).toHaveAccessibleName("BSc in Rover Design")
    
    // AND it displays the period of the occupation in English.
    expect(occupation).toHaveTextContent("July 2013\u2013May 2017")
    
    // AND it displays the organisation of the occupation in English.
    // AND it specifies a hyperlink to the organisation website.
    expect(within(occupation).getByRole("link", { name: "NASA" }))
        .toHaveAttribute("href", "https://www.nasa.gov/")
    
    // AND it displays the activities of the occupation in English.
    expect(occupation).toHaveTextContent(
        "Chose durable wheels of aluminium with great traction."
        + "Implemented a six-wheeled rocker-bogie system to climb steep sand dunes and withstand tilts without overturning."
        + "Acquired a heat rejection system to maintain optimal operation temperatures.",
    )
})

test("The content displays the copyright owner.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content displays the copyright owner.
    expect(content.getFooterContent()).toHaveTextContent("The Perseverance Dummy Profile")
})

test("The content specifies a hyperlink to GitHub.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content specifies a hyperlink to GitHub.
    expect(within(content.getFooterContent()).getByRole("link", { name: "GitHub" }))
        .toHaveAttribute("href", "https://github.com/spdiswal/")
})

test("The content specifies a hyperlink to the NASA/JPL-Caltech image use policy.", () => {
    // GIVEN a test subject.
    const content = renderContent()
    
    // THEN the content specifies a hyperlink to the NASA/JPL-Caltech image use policy.
    expect(within(content.getFooterContent()).getByRole("link", { name: /Fotos:/u }))
        .toHaveAttribute("href", "https://www.jpl.nasa.gov/jpl-image-use-policy")
})

function renderContent() {
    const { rerender } = render((
        <LocaleProvider value="da">
            <HeaderContent/>
            <MainContent/>
            <FooterContent/>
        </LocaleProvider>
    ))
    
    function getHeaderContent() {
        // Using getAllByRole() to work around a bug in Testing Library, which
        // assumes that a <header> element has the 'banner' role when it is a
        // descendant of an <article> or a <section> element, even though this
        // is incorrect according to the WAI-ARIA specification.
        return screen.getAllByRole("banner")[0]
    }
    
    function getHeroImage() {
        return within(getHeaderContent()).getByRole("img", { name: /.+/u })
    }
    
    function getMainContent() {
        return screen.getByRole("main")
    }
    
    function getOccupation(title: string) {
        return screen.getByRole("article", { name: title })
    }
    
    function getOccupations() {
        const articles = screen.getAllByRole("article")
        return articles.filter((article) => article.id !== "biography")
    }
    
    function getFooterContent() {
        return screen.getByRole("contentinfo")
    }
    
    function changeToEnglishLocale() {
        rerender((
            <LocaleProvider value="en">
                <HeaderContent/>
                <MainContent/>
                <FooterContent/>
            </LocaleProvider>
        ))
    }
    
    return {
        getHeaderContent,
        getHeroImage,
        getMainContent,
        getOccupation,
        getOccupations,
        getFooterContent,
        changeToEnglishLocale,
    }
}
