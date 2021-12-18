import type { Props } from "+types"
import { parseISO } from "date-fns"
import pictureAssetUrl from "./assets/perseverance-dummy.webp"
import { LineSeparator } from "./LineSeparator"
import { Occupation } from "./Occupation"

type ProfilePageProps = Props<{
    name: string
}>

export function ProfilePage({ name }: ProfilePageProps) {
    return (
        <main class="flex flex-col gap-y-16 min-w-min mx-auto px-8 py-12 / md:gap-y-20 md:py-20 / lg:gap-y-24 lg:py-32">
            <img
                class="aspect-square h-auto mx-auto rounded-16 w-48 / md:rounded-24 md:w-72 / lg:rounded-32 lg:w-96"
                src={pictureAssetUrl}
                alt="My self-portrait. Courtesy NASA/JPL-Caltech."
            />
            <div class="flex flex-col font-black gap-y-2 text-2xl text-center text-primary-500 / md:text-3xl / lg:text-4xl / xl:text-5xl">
                <p>Hi! My name is <span class="text-white">{name}</span>.</p>
                <p>And I enjoy digging through the Martian soil!</p>
            </div>
            <LineSeparator/>
            <Occupation
                title="Astrobiologist"
                since={parseISO("2021-06-01")}
                until={null}
                organisation="NASA"
                activities={[
                    "Deployed at the Jezero Crater on Planet Mars.",
                    "Searching for signs of past life by studying certain types of rock.",
                    "Collecting rock and soil samples to be picked up later by another rover.",
                    "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere.",
                    "Carrying the Ingenuity rotorcraft, which accomplished the very first man-made, powered flight on another celestial body than Earth.",
                    "Making video recordings of Ingenuity's flights.",
                ]}
            />
            <LineSeparator/>
            <Occupation
                title="Interplanetary Cinematography Agent"
                since={parseISO("2020-07-30")}
                until={parseISO("2021-02-18")}
                organisation="The Interplanetary Space Agency"
                activities={[
                    "Lifted off from Florida, Planet Earth, aboard an Atlas V carrier rocket.",
                    "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour.",
                    "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology.",
                    "Made a high-resolution video recording of the parachute deployment during descent.",
                    "Captured the first audio clip from the surface of another planet.",
                ]}
            />
            <LineSeparator/>
            <Occupation
                title="Deviser"
                since={parseISO("2012-12-04")}
                until={parseISO("2020-07-30")}
                organisation="NASA"
                activities={[
                    "Based the design on the Curiosity rover.",
                    "Chose durable wheels of aluminium with great traction.",
                    "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna.",
                    "Implemented a twin rover to be used for debugging on Planet Earth.",
                ]}
            />
        </main>
    )
}
