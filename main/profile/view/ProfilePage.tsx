import type { ProfileContent } from "+profile"
import type { Props } from "+types"
import { Fragment } from "preact"
import { LineSeparator } from "./LineSeparator"
import { Occupation } from "./Occupation"

type ProfilePageProps = Props<{
    content: ProfileContent
}>

export function ProfilePage({
    content: { picture, name, ambition, career },
}: ProfilePageProps) {
    return (
        <main class="flex flex-col gap-y-16 min-w-min mx-auto px-8 py-12 / md:gap-y-20 md:py-20 / lg:gap-y-24 lg:py-32">
            <img
                class="aspect-square h-auto mx-auto rounded-16 w-48 / md:rounded-24 md:w-72 / lg:rounded-32 lg:w-96"
                src={picture.assetUrl}
                alt={picture.caption}
            />
            <div class="flex flex-col font-black gap-y-2 text-2xl text-center text-primary-500 / md:text-3xl / lg:text-4xl / xl:text-5xl">
                <p>Hi! My name is <span class="text-white">{name}</span>.</p>
                <p>{ambition}</p>
            </div>
            {career.map(({ key, title, organisation, period, activities }) => (
                <Fragment key={key}>
                    <LineSeparator/>
                    <Occupation
                        title={title}
                        organisation={organisation}
                        period={period}
                        activities={activities}
                    />
                </Fragment>
            ))}
        </main>
    )
}
