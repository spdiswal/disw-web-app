import { useLocale } from "+i18n"
import type { Organisation } from "+profile"
import { Age, Biography, Main, Discipline, Education, ElevatedRoundedPortrait, Employments, Experience, Footer, Identity, LinearOutline, Occupation, Residence } from "+profile"
import portraitAssetUrl from "./perseverance-dummy.webp"

export const name = "Perseverance"

const nasa: Organisation = {
    name: "NASA",
    url: "https://www.nasa.gov/",
}

/**
 * Portrait: Courtesy NASA/JPL-Caltech.
 * https://www.jpl.nasa.gov/jpl-image-use-policy
 */
export function MainContent() {
    const locale = useLocale()
    
    return (
        <Main>
            <Identity
                name={name}
                status={{
                    da: "… og jeg er astrobiolog på Mars.",
                    en: "… and I'm an astrobiologist on Mars.",
                }[locale]}
                portrait={
                    <ElevatedRoundedPortrait
                        assetUrl={portraitAssetUrl}
                        caption={{
                            da: "Mit selvportræt. Jeg har boret to huller i et klippestykke foran mig og lavet hjulspor i det røde sand. Horisonten er en smule diset. Courtesy NASA/JPL-Caltech.",
                            en: "My self-portrait. I have drilled two holes in a rock in front of me and made wheel tracks in the red soil. The horizon is slightly hazy. Courtesy NASA/JPL-Caltech.",
                        }[locale]}
                    />
                }
                outline={
                    <LinearOutline>
                        <Age class="whitespace-nowrap">{{ da: "10 år", en: "10 years" }[locale]}</Age>
                        <Residence class="whitespace-nowrap">Jezero</Residence>
                        <Discipline class="md:w-min lg:w-auto">{{ da: "Astrobiologi", en: "Astrobiology" }[locale]}</Discipline>
                        <Experience class="whitespace-nowrap">{{ da: "2 år", en: "2 years" }[locale]}</Experience>
                    </LinearOutline>
                }
            />
            <Biography id="biography">
                {{
                    da: "Jeg elsker at grave i sandet på Mars! Og jeg drømmer om at opdage liv på den røde planet.",
                    en: "I enjoy digging through the Martian soil! And I dream about discovering life on the Red Planet.",
                }[locale]}
            </Biography>
            <Employments>
                <Occupation
                    id="21-astrobiologist"
                    title={{ da: "Astrobiolog", en: "Astrobiologist" }[locale]}
                    organisation={{
                        name: { da: "Røde Planet", en: "Red Planet" }[locale],
                        url: "https://www.nasa.gov/",
                    }}
                    since="2021-12"
                    until="present"
                >
                    <p>
                        {{
                            da: "Udstationeret i Jezero-krateret på planeten Mars.",
                            en: "Deployed at the Jezero Crater on Planet Mars.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Analyserer den kemiske sammensætning af materialet på Mars' overflade.",
                            en: "Analysing the chemical composition of the material on the Martian surface.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Leder efter tegn på tidligere liv ved at kigge efter biosignaturer i materialet, fx fossiler og organiske molekyler.",
                            en: "Searching for signs of past life by looking for biosignatures in this material, e.g. fossils and organic matter.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Indsamler klippestykker og jordprøver, der senere skal samles op af en anden rover.",
                            en: "Collecting rock and soil samples to be picked up later by another rover.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Forsøger at producere ilt fra kuldioxid i Mars' atmosfære.",
                            en: "Attempting to produce oxygen from carbon dioxide in the Martian atmosphere.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Observerer vejrforholdene på Mars' overflade ved hjælp af sensorer, der måler temperatur, vindhastighed, relativ luftfugtighed, støvkorn og radioaktiv stråling.",
                            en: "Observing the surface weather on Mars with a set of sensors that measure the temperature, wind speed, relative humidity, dust particles, and radiation.",
                        }[locale]}
                    </p>
                </Occupation>
                <Occupation
                    id="21-first-officer"
                    title={{ da: "Førsteofficer", en: "First Officer" }[locale]}
                    organisation={nasa}
                    since="2021-03"
                    until="2021-10"
                >
                    <p>
                        {{
                            da: "Hjalp helikopteren Ingenuity med at gennemføre den allerførste menneskeskabte, motoriserede flyvning på et andet himmellegeme end Jorden.",
                            en: "Assisted the Ingenuity rotorcraft in accomplishing the very first man-made, powered flight on another celestial body than Earth.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Lavede videooptagelser af Ingenuitys flyvninger.",
                            en: "Made video recordings of Ingenuity's flights.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Optog det første lydklip fra en anden planets overflade, herunder den summen der blev skabt af Ingenuitys rotorer.",
                            en: "Captured the first audio clip from the surface of another planet, including the hum made by Ingenuity's rotor blades.",
                        }[locale]}
                    </p>
                </Occupation>
                <Occupation
                    id="20-interplanetary-agent"
                    title={{ da: "Interplanetarisk agent", en: "Interplanetary Agent" }[locale]}
                    organisation={{
                        name: { da: "Verdensrumsagenturet", en: "The Interplanetary Space Agency" }[locale],
                        url: "https://www.nasa.gov/",
                    }}
                    since="2020-08"
                    until="2021-02"
                >
                    <p>
                        {{
                            da: "Sendt til vejrs fra Cape Canaveral, Florida, om bord på en Atlas V-løfteraket.",
                            en: "Launched from Cape Canaveral, Florida, aboard an Atlas V carrier rocket.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Fuldførte en syv måneder lang rejse gennem rummet og tilbagelagde omkring 480 millioner kilometer med en hastighed på cirka 39.600 kilometer i timen.",
                            en: "Accomplished a seven-month journey through space, travelling about 480 million kilometers at a speed of approximately 39,600 kilometers per hour.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Landede i den anviste målzone ved hjælp af styretøjsteknologien Terrain Relative Navigation (TRN).",
                            en: "Landed in the designated target zone using the Terrain Relative Navigation (TRN) steering technology.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Producerede en videooptagelse i høj opløsning af faldskærmens udfoldning under landingen.",
                            en: "Made a high-resolution video recording of the parachute deployment during descent.",
                        }[locale]}
                    </p>
                </Occupation>
            </Employments>
            <Education>
                <Occupation
                    id="17-msc-continuity"
                    title={{ da: "Kandidat i kontinuitet", en: "MSc in Continuity" }[locale]}
                    organisation={nasa}
                    since="2017-09"
                    until="2020-06"
                >
                    <p>
                        {{
                            da: "Medbragte en plutonium-238-baseret termoelektrisk radioisotopgenerator til at oplade to litium-ion-batterier, der muliggør arbejde om natten og under støvstorme.",
                            en: "Brought a plutonium-238-based radioisotope thermoelectric power generator to charge two lithium-ion batteries, allowing for operation at night and during dust storms.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Leverede redundans på datasignalet med to ekstra antenner i X-båndets frekvensområde ud over den primære antenne i UHF-båndets frekvensområde.",
                            en: "Provided data signal redundancy by including two extra X-band frequency antennas in addition to the primary ultra-high frequency antenna.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Implementerede en tvillingerover til fejlsøgning på planeten Jorden.",
                            en: "Implemented a twin rover to be used for debugging on Planet Earth.",
                        }[locale]}
                    </p>
                </Occupation>
                <Occupation
                    id="13-bsc-rover-design"
                    title={{ da: "Bachelor i roverdesign", en: "BSc in Rover Design" }[locale]}
                    organisation={nasa}
                    since="2013-07"
                    until="2017-05"
                >
                    <p>
                        {{
                            da: "Valgte slidstærke hjul i aluminium med et godt vejgreb.",
                            en: "Chose durable wheels of aluminium with great traction.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Implementerede en sekshjulet rocker-bogie-opstilling til at bestige stejle klitter og modstå hældninger uden at vælte.",
                            en: "Implemented a six-wheeled rocker-bogie system to climb steep sand dunes and withstand tilts without overturning.",
                        }[locale]}
                    </p>
                    <p>
                        {{
                            da: "Anskaffede et varmeafvisende system til at opretholde en optimal arbejdstemperatur.",
                            en: "Acquired a heat rejection system to maintain optimal operation temperatures.",
                        }[locale]}
                    </p>
                </Occupation>
            </Education>
        </Main>
    )
}

export function FooterContent() {
    return (
        <Footer
            copyrightOwner="The Perseverance Dummy Profile"
            githubUrl="https://github.com/spdiswal/"
        />
    )
}
