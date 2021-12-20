import { defineProfileContent } from "+profile"
import pictureAssetUrl from "./curiosity-dummy.webp"

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
    name: "Curiosity",
    ambition: {
        da: "Og jeg er vild med klimaet på Mars!",
        en: "And the climate on Mars thrills me!",
    },
    career: [
        {
            title: {
                da: "Geolog",
                en: "Geologist",
            },
            organisation: "NASA",
            period: {
                since: "2012-08-15",
                until: null,
            },
            activities: [
                {
                    da: "Udstationeret i Gale-krateret på planeten Mars.",
                    en: "Deployed at the Gale Crater on Planet Mars.",
                },
                {
                    da: "Undersøger den kemiske sammensætning af materialet på Mars' overflade.",
                    en: "Investigating the chemical composition of the material on the Martian surface.",
                },
                {
                    da: "Indsamler og analyserer klippestykker og jordprøver.",
                    en: "Collecting and analysing rock and soil samples.",
                },
                {
                    da: "Nærstudere vandets cyklus på Mars.",
                    en: "Studying the water cycles on Mars.",
                },
                {
                    da: "Måler den radioaktive stråling på Mars' overflade, hvilket har afsløret dens sundhedsrisiko for mennesker på Mars.",
                    en: "Measuring the surface radiation on Mars, uncovering its great health risks for humans on Mars.",
                },
            ],
        },
        {
            title: {
                da: "Interplanetarisk turist",
                en: "Interplanetary Cruiser",
            },
            organisation: {
                da: "Verdensrumsagenturet",
                en: "The Interplanetary Space Agency",
            },
            period: {
                since: "2011-11-26",
                until: "2012-08-06",
            },
            activities: [
                {
                    da: "Sendt til vejrs fra den jordiske opsendelsesbase Cape Canaveral om bord på en Atlas V-raket.",
                    en: "Launched from the terrestrial site of Cape Canaveral aboard an Atlas V rocket.",
                },
                {
                    da: "Målte den kosmiske stråling i det interplanetariske rum.",
                    en: "Measured the cosmic radiation in interplanetary space.",
                },
                {
                    da: "Gennemførte otte måneders rumrejse.",
                    en: "Completed an eight-month journey through space.",
                },
                {
                    da: "Havde et fantastisk samarbejde med Mars Reconnaissance Orbiter.",
                    en: "Had a wonderful teamwork with the Mars Reconnaissance Orbiter.",
                },
                {
                    da: "Gennemførte en blød landing på Mars' overflade ved hjælp af en sky crane touchdown-manøvre med rumfartøjet.",
                    en: "Soft landed onto the Martian surface using a sky crane touchdown manoeuvre with the spacecraft.",
                },
            ],
        },
        {
            title: {
                da: "Udruger",
                en: "Hatcher",
            },
            organisation: "NASA",
            period: {
                since: "2004-04-14",
                until: "2011-11-26",
            },
            activities: [
                {
                    da: "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under sandstorme.",
                    en: "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms.",
                },
                {
                    da: "Valgte en vippeboogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte.",
                    en: "Chose rocker-bogie mobility gear to climb steep sand dunes and withstand tilts without overturning.",
                },
                {
                    da: "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur.",
                    en: "Acquired a heat rejection system to maintain optimal operation temperatures.",
                },
                {
                    da: "Implementerede to tvillingerovere til fejlsøgning på planeten Jorden.",
                    en: "Implemented two twin rovers to be used for debugging on Planet Earth.",
                },
            ],
        },
    ],
})
