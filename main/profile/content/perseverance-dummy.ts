import { defineProfileContent } from "+profile"
import pictureAssetUrl from "./perseverance-dummy.webp"

/**
 * Profile picture: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export const content = defineProfileContent({
    picture: {
        assetUrl: pictureAssetUrl,
        caption: "My self-portrait. Courtesy NASA/JPL-Caltech.",
    },
    name: "Perseverance",
    ambition: "And I enjoy digging through the Martian soil!",
    career: [
        {
            title: "Astrobiologist",
            organisation: "NASA",
            period: {
                since: "2021-06-01",
                until: null,
            },
            activities: [
                "Deployed at the Jezero Crater on Planet Mars.",
                "Searching for signs of past life by studying certain types of rock.",
                "Collecting rock and soil samples to be picked up later by another rover.",
                "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere.",
                "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth.",
                "Making video recordings of Ingenuity's flights.",
            ],
        },
        {
            title: "Interplanetary Cinematography Agent",
            organisation: "The Interplanetary Space Agency",
            period: {
                since: "2020-07-30",
                until: "2021-02-18",
            },
            activities: [
                "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket.",
                "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour.",
                "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology.",
                "Made a high-resolution video recording of the parachute deployment during descent.",
                "Captured the first audio clip from the surface of another planet.",
            ],
        },
        {
            title: "Deviser",
            organisation: "NASA",
            period: {
                since: "2012-12-04",
                until: "2020-07-30",
            },
            activities: [
                "Based the design on the Curiosity rover.",
                "Chose durable wheels of aluminium with great traction.",
                "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna.",
                "Implemented a twin rover to be used for debugging on Planet Earth.",
            ],
        },
    ],
})
