import type { Language, Multilingual } from "+i18n"
import type { Content } from "+profile"
import { Fragment } from "preact"
import { LineSeparator } from "./LineSeparator"
import { OccupationArticle } from "./OccupationArticle"

const greeting: Multilingual<string> = {
    da: "Hej! Jeg hedder",
    en: "Hi! My name is",
}

type ProfilePageProps = {
    readonly content: Content
    readonly activeLanguage: Language
}

export function ProfilePage({
    content: { portrait, name, ambition, career },
    activeLanguage,
}: ProfilePageProps) {
    return (
        <main class="flex flex-col gap-y-16 / md:gap-y-20/ lg:gap-y-24">
            <img
                class="aspect-square h-auto mx-auto rounded-16 w-48 / md:rounded-24 md:w-72 / lg:rounded-32 lg:w-96"
                src={portrait.assetUrl}
                alt={portrait.caption[activeLanguage]}
            />
            <div class="flex flex-col font-black gap-y-2 text-2xl text-center text-primary-500 / md:text-3xl / lg:text-4xl / xl:text-5xl">
                <p>{greeting[activeLanguage]}{" "}
                    <span class="text-white">{name}</span>.
                </p>
                <p>{ambition[activeLanguage]}</p>
            </div>
            {career.map((occupation) => (
                <Fragment key={occupation.id}>
                    <LineSeparator/>
                    <OccupationArticle
                        occupation={occupation}
                        activeLanguage={activeLanguage}
                    />
                </Fragment>
            ))}
        </main>
    )
}
