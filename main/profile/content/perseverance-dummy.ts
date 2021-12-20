import { defineProfileContent } from "+profile"
import pictureAssetUrl from "./perseverance-dummy.webp"

/**
 * Profile picture: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export const content = defineProfileContent({
    picture: {
        assetUrl: pictureAssetUrl,
        caption: {
            da: "Mit selvportræt. Courtesy NASA/JPL-Caltech.",
            en: "My self-portrait. Courtesy NASA/JPL-Caltech.",
        },
    },
    name: "Perseverance",
    ambition: {
        da: "Og jeg elsker at grave i sandet på Mars!",
        en: "And I enjoy digging through the Martian soil!",
    },
    career: [
        {
            title: {
                da: "Astrobiolog",
                en: "Astrobiologist",
            },
            organisation: "NASA",
            period: {
                since: "2021-06-01",
                until: null,
            },
            activities: [
                {
                    da: "Udstationeret i Jezero-krateret på planeten Mars.",
                    en: "Deployed at the Jezero Crater on Planet Mars.",
                },
                {
                    da: "Leder efter tegn på tidligere liv ved at nærstudere visse typer klippe.",
                    en: "Searching for signs of past life by studying certain types of rock.",
                },
                {
                    da: "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover.",
                    en: "Collecting rock and soil samples to be picked up later by another rover.",
                },
                {
                    da: "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære.",
                    en: "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere.",
                },
                {
                    da: "Medbringer helikopteren Ingenuity, som gennemførte den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden.",
                    en: "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth.",
                },
                {
                    da: "Laver videooptagelser af Ingenuitys flyvninger.",
                    en: "Making video recordings of Ingenuity's flights.",
                },
            ],
        },
        {
            title: {
                da: "Interplanetarisk cinematografiagent",
                en: "Interplanetary Cinematography Agent",
            },
            organisation: {
                da: "Verdensrumsagenturet",
                en: "The Interplanetary Space Agency",
            },
            period: {
                since: "2020-07-30",
                until: "2021-02-18",
            },
            activities: [
                {
                    da: "Opsendt fra Florida, planeten Jorden, om bord på en Atlas V-løfteraket.",
                    en: "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket.",
                },
                {
                    da: "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen.",
                    en: "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour.",
                },
                {
                    da: "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN).",
                    en: "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology.",
                },
                {
                    da: "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen.",
                    en: "Made a high-resolution video recording of the parachute deployment during descent.",
                },
                {
                    da: "Optog det første lydklip fra en anden planets overflade.",
                    en: "Captured the first audio clip from the surface of another planet.",
                },
            ],
        },
        {
            title: {
                da: "Opfinder",
                en: "Deviser",
            },
            organisation: "NASA",
            period: {
                since: "2012-12-04",
                until: "2020-07-30",
            },
            activities: [
                {
                    da: "Baseret på Curiosity-roverens design.",
                    en: "Based the design on the Curiosity rover.",
                },
                {
                    da: "Valgte slidstærke hjul i aluminium med et godt vejgreb.",
                    en: "Chose durable wheels of aluminium with great traction.",
                },
                {
                    da: "Leverede redundans på datasignalet ved at medbringe to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde.",
                    en: "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna.",
                },
                {
                    da: "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
                    en: "Implemented a twin rover to be used for debugging on Planet Earth.",
                },
            ],
        },
    ],
})
