import type { Language } from "+i18n"
import { multilingual } from "+i18n"
import type { ProfileContent } from "+profile"
import type { Props } from "+types"
import { Fragment } from "preact"
import { LineSeparator } from "./LineSeparator"
import { Occupation } from "./Occupation"

const greeting = multilingual({
    da: "Hej! Jeg hedder",
    en: "Hi! My name is",
})

type ProfilePageProps = Props<{
    content: ProfileContent
    activeLanguage: Language
}>

export function ProfilePage({
    content: { picture, name, ambition, career },
    activeLanguage,
}: ProfilePageProps) {
    return (
        <main class="flex flex-col gap-y-16 / md:gap-y-20/ lg:gap-y-24">
            <img
                class="aspect-square h-auto mx-auto rounded-16 w-48 / md:rounded-24 md:w-72 / lg:rounded-32 lg:w-96"
                src={picture.assetUrl}
                alt={picture.caption.resolveFor(activeLanguage)}
            />
            <div class="flex flex-col font-black gap-y-2 text-2xl text-center text-primary-500 / md:text-3xl / lg:text-4xl / xl:text-5xl">
                <p>{greeting.resolveFor(activeLanguage)}{" "}
                    <span class="text-white">{name}</span>.
                </p>
                <p>{ambition.resolveFor(activeLanguage)}</p>
            </div>
            {career.map((occupation) => (
                <Fragment key={occupation.key}>
                    <LineSeparator/>
                    <Occupation
                        occupation={occupation}
                        activeLanguage={activeLanguage}
                    />
                </Fragment>
            ))}
        </main>
    )
}
