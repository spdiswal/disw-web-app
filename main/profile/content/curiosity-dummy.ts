import { defineProfileContent } from "+profile"
import pictureAssetUrl from "./curiosity-dummy.webp"

/**
 * Profile picture: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export const content = defineProfileContent({
    picture: {
        assetUrl: pictureAssetUrl,
        caption: "My self-portrait. Courtesy NASA/JPL-Caltech.",
    },
    name: "Curiosity",
    ambition: "And the climate on Mars thrills me!",
    career: [
        {
            title: "Geologist",
            period: {
                since: "2012-08-15",
                until: null,
            },
            organisation: "NASA",
            activities: [
                "Deployed at the Gale Crater on Planet Mars.",
                "Investigating the chemical composition of the material on the Martian surface.",
                "Collecting and analysing rock and soil samples.",
                "Studying the water cycles on Mars.",
                "Measuring the surface radiation on Mars, uncovering its great health risks for humans on Mars.",
            ],
        },
        {
            title: "Interplanetary Cruiser",
            period: {
                since: "2011-11-26",
                until: "2012-08-06",
            },
            organisation: "The Interplanetary Space Agency",
            activities: [
                "Launched from the terrestrial site of Cape Canaveral aboard an Atlas V rocket.",
                "Measured the cosmic radiation in interplanetary space.",
                "Completed an eight-month journey through space.",
                "Had a wonderful teamwork with the Mars Reconnaissance Orbiter.",
                "Soft landed onto the Martian surface using a sky crane touchdown manoeuvre with the spacecraft.",
            ],
        },
        {
            title: "Hatcher",
            period: {
                since: "2004-04-14",
                until: "2011-11-26",
            },
            organisation: "NASA",
            activities: [
                "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms.",
                "Chose rocker-bogie mobility gear to climb steep sand dunes and withstand tilts without overturning.",
                "Acquired a heat rejection system to maintain optimal operation temperatures.",
                "Implemented two twin rovers to be used for debugging on Planet Earth.",
            ],
        },
    ],
})
