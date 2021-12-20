import type { Language, Multilingual } from "+i18n"
import { multilingual } from "+i18n"
import type { Props } from "+types"
import { DotSeparator } from "./DotSeparator"
import { EvenFlexBasis } from "./EvenFlexBasis"

const thePresent = multilingual({
    da: "nu",
    en: "present",
})

type OccupationProps = Props<{
    occupation: {
        title: Multilingual<string>
        organisation: Multilingual<string>
        period: {
            since: Date
            until: Date | null
        }
        activities: Array<{
            key: string
            description: Multilingual<string>
        }>
    }
    activeLanguage: Language
}>

export function Occupation({
    occupation: { title, organisation, period, activities },
    activeLanguage,
}: OccupationProps) {
    return (
        <article class="flex flex-col gap-y-2 items-center">
            <header class="flex flex-col font-semibold items-center pb-4 text-lg text-primary-500 w-full / md:flex-row md:items-center md:justify-center md:text-xl / lg:text-2xl">
                {/*
                    By applying 'pressure' from even flex bases on both sides of
                    the title, it will remain centered regardless of the period
                    and the organisation.
                    This only applies from the 'md' breakpoint and upwards.
                 */}
                <EvenFlexBasis>
                    <div class="font-normal italic pb-2 text-center / md:font-semibold md:not-italic md:pb-0 md:text-right">
                        <DateTime dateTime={period.since}/>
                        &ndash;
                        {period.until !== null
                            ? <DateTime dateTime={period.until}/>
                            : thePresent.resolveFor(activeLanguage)}
                    </div>
                </EvenFlexBasis>
                <DotSeparator/>
                <h1 class="font-black text-center text-white / md:grow-0 md:shrink-0 md:w-min / lg:w-auto">
                    {title.resolveFor(activeLanguage)}
                </h1>
                <DotSeparator/>
                <EvenFlexBasis>
                    <div class="text-center / md:text-left">
                        {organisation.resolveFor(activeLanguage)}
                    </div>
                </EvenFlexBasis>
            </header>
            {activities.map((activity) => (
                <p key={activity.key} class="text-center text-white / md:text-lg md:w-144 / lg:w-192">
                    {activity.description.resolveFor(activeLanguage)}
                </p>
            ))}
        </article>
    )
}

type DateTimeProps = Props<{
    dateTime: Date
}>

function DateTime({ dateTime }: DateTimeProps) {
    return (
        <time dateTime={dateTime.toISOString()}>
            {dateTime.getUTCFullYear()}
        </time>
    )
}
