import { indistinguishable } from "+i18n"
import type { Content } from "+profile"
import { parseISO } from "date-fns"
import portraitAssetUrl from "./curiosity-dummy.webp"

/**
 * Portrait: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export const content: Content = {
    portrait: {
        assetUrl: portraitAssetUrl,
        caption: {
            da: "Mit selvportræt. Courtesy NASA/JPL-Caltech.",
            en: "My self-portrait. Courtesy NASA/JPL-Caltech.",
        },
    },
    name: "Curiosity",
    ambition: {
        da: "Og jeg er vild med klimaet på Mars!",
        en: "And the climate on Mars thrills me!",
    },
    career: [
        {
            id: "12-nasa",
            title: {
                da: "Geolog",
                en: "Geologist",
            },
            organisation: indistinguishable("NASA"),
            period: {
                since: parseISO("2012-08-15"),
                until: null,
            },
            activities: [
                {
                    id: "gale",
                    da: "Udstationeret i Gale-krateret på planeten Mars.",
                    en: "Deployed at the Gale Crater on Planet Mars.",
                },
                {
                    id: "chemical-composition",
                    da: "Undersøger den kemiske sammensætning af materialet på Mars' overflade.",
                    en: "Investigating the chemical composition of the material on the Martian surface.",
                },
                {
                    id: "samples",
                    da: "Indsamler og analyserer klippestykker og jordprøver.",
                    en: "Collecting and analysing rock and soil samples.",
                },
                {
                    id: "water-cycles",
                    da: "Nærstuderer vandets cyklus på Mars.",
                    en: "Studying the water cycles on Mars.",
                },
                {
                    id: "surface-radiation",
                    da: "Måler den radioaktive stråling på Mars' overflade, hvilket har afsløret dens sundhedsrisiko for mennesker på Mars.",
                    en: "Measuring the surface radiation on Mars, uncovering its great health risks for humans on Mars.",
                },
            ],
        },
        {
            id: "11-space",
            title: {
                da: "Interplanetarisk turist",
                en: "Interplanetary Cruiser",
            },
            organisation: {
                da: "Verdensrums\u00ADagenturet",
                en: "The Interplanetary Space Agency",
            },
            period: {
                since: parseISO("2011-11-26"),
                until: parseISO("2012-08-06"),
            },
            activities: [
                {
                    id: "launch",
                    da: "Sendt til vejrs fra den jordiske opsendelsesbase Cape Canaveral om bord på en Atlas V-raket.",
                    en: "Launched from the terrestrial site of Cape Canaveral aboard an Atlas V rocket.",
                },
                {
                    id: "cosmic-radiation",
                    da: "Målte den kosmiske stråling i det interplanetariske rum.",
                    en: "Measured the cosmic radiation in interplanetary space.",
                },
                {
                    id: "journey",
                    da: "Gennemførte otte måneders rumrejse.",
                    en: "Completed an eight-month journey through space.",
                },
                {
                    id: "teamwork",
                    da: "Havde et fantastisk samarbejde med Mars Reconnaissance Orbiter.",
                    en: "Had a wonderful teamwork with the Mars Reconnaissance Orbiter.",
                },
                {
                    id: "soft-landing",
                    da: "Gennemførte en blød landing på Mars' overflade ved hjælp af en sky crane touchdown-manøvre med rumfartøjet.",
                    en: "Soft landed onto the Martian surface using a sky crane touchdown manoeuvre with the spacecraft.",
                },
            ],
        },
        {
            id: "04-nasa",
            title: {
                da: "Udruger",
                en: "Hatcher",
            },
            organisation: indistinguishable("NASA"),
            period: {
                since: parseISO("2004-04-14"),
                until: parseISO("2011-11-26"),
            },
            activities: [
                {
                    id: "radioisotope",
                    da: "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under sandstorme.",
                    en: "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms.",
                },
                {
                    id: "rocker-bogie",
                    da: "Valgte en vippeboogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte.",
                    en: "Chose rocker-bogie mobility gear to climb steep sand dunes and withstand tilts without overturning.",
                },
                {
                    id: "heat-rejection",
                    da: "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur.",
                    en: "Acquired a heat rejection system to maintain optimal operation temperatures.",
                },
                {
                    id: "debugging",
                    da: "Implementerede to tvillingerovere til fejlsøgning på planeten Jorden.",
                    en: "Implemented two twin rovers to be used for debugging on Planet Earth.",
                },
            ],
        },
    ],
}
