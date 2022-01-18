import { indistinguishable } from "+i18n"
import type { Content } from "+profile"
import { parseISO } from "date-fns"
import portraitAssetUrl from "./perseverance-dummy.webp"

const age = 10
const workExperience = 2

/**
 * Portrait: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export const content: Content = {
    identity: {
        portrait: {
            assetUrl: portraitAssetUrl,
            caption: {
                da: "Mit selvportræt. Courtesy NASA/JPL-Caltech.",
                en: "My self-portrait. Courtesy NASA/JPL-Caltech.",
            },
        },
        name: "Perseverance",
        areaOfExpertise: {
            da: "en Mars-rover",
            en: "a Mars rover",
        },
        age: {
            da: `${age} år`,
            en: `${age} years`,
        },
        residence: indistinguishable("Jezero"),
        academicDiscipline: {
            da: "Astrobiologi",
            en: "Astrobiology",
        },
        workExperience: {
            da: `${workExperience} år`,
            en: `${workExperience} years`,
        },
    },
    biography: {
        da: "Jeg elsker at grave i sandet på Mars!",
        en: "I enjoy digging through the Martian soil!",
    },
    career: [
        {
            id: "21-nasa",
            title: {
                da: "Astrobiolog",
                en: "Astrobiologist",
            },
            organisation: indistinguishable("NASA"),
            period: {
                since: parseISO("2021-06-01"),
                until: null,
            },
            activities: [
                {
                    id: "jezero",
                    da: "Udstationeret i Jezero-krateret på planeten Mars.",
                    en: "Deployed at the Jezero Crater on Planet Mars.",
                },
                {
                    id: "life",
                    da: "Leder efter tegn på tidligere liv ved at nærstudere visse typer klippe.",
                    en: "Searching for signs of past life by studying certain types of rock.",
                },
                {
                    id: "samples",
                    da: "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover.",
                    en: "Collecting rock and soil samples to be picked up later by another rover.",
                },
                {
                    id: "oxygen",
                    da: "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære.",
                    en: "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere.",
                },
                {
                    id: "ingenuity",
                    da: "Medbringer helikopteren Ingenuity, som gennemførte den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden.",
                    en: "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth.",
                },
                {
                    id: "video",
                    da: "Laver videooptagelser af Ingenuitys flyvninger.",
                    en: "Making video recordings of Ingenuity's flights.",
                },
            ],
        },
        {
            id: "20-space",
            title: {
                da: "Interplanetarisk cinematografiagent",
                en: "Interplanetary Cinematography Agent",
            },
            organisation: {
                da: "Verdensrumsagenturet",
                en: "The Interplanetary Space Agency",
            },
            period: {
                since: parseISO("2020-07-30"),
                until: parseISO("2021-02-18"),
            },
            activities: [
                {
                    id: "liftoff",
                    da: "Opsendt fra Florida, planeten Jorden, om bord på en Atlas V-løfteraket.",
                    en: "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket.",
                },
                {
                    id: "journey",
                    da: "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen.",
                    en: "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour.",
                },
                {
                    id: "trn",
                    da: "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN).",
                    en: "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology.",
                },
                {
                    id: "video",
                    da: "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen.",
                    en: "Made a high-resolution video recording of the parachute deployment during descent.",
                },
                {
                    id: "audio",
                    da: "Optog det første lydklip fra en anden planets overflade.",
                    en: "Captured the first audio clip from the surface of another planet.",
                },
            ],
        },
    ],
    education: [
        {
            id: "12-nasa",
            title: {
                da: "Opfinder",
                en: "Deviser",
            },
            organisation: indistinguishable("NASA"),
            period: {
                since: parseISO("2012-12-04"),
                until: parseISO("2020-07-30"),
            },
            activities: [
                {
                    id: "design",
                    da: "Baseret på Curiosity-roverens design.",
                    en: "Based the design on the Curiosity rover.",
                },
                {
                    id: "wheels",
                    da: "Valgte slidstærke hjul i aluminium med et godt vejgreb.",
                    en: "Chose durable wheels of aluminium with great traction.",
                },
                {
                    id: "antennas",
                    da: "Leverede redundans på datasignalet ved at medbringe to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde.",
                    en: "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna.",
                },
                {
                    id: "debugging",
                    da: "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
                    en: "Implemented a twin rover to be used for debugging on Planet Earth.",
                },
            ],
        },
    ],
}
