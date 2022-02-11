import { SplitContainer } from "+elements"
import type { Locale, Localisable } from "+i18n"
import type { OccupationList } from "+profile"
import type { Id } from "+types"
import clsx from "clsx"
import type { ClassValue } from "clsx"
import { ProfileOccupationEntry } from "./ProfileOccupationEntry"

type ProfileOccupationTimelineProps = {
    readonly class?: ClassValue
    readonly label: Localisable<string>
    readonly labelId: Id<"ProfileOccupationTimeline">
    readonly occupations: OccupationList
    readonly locale: Locale
}

export function ProfileOccupationTimeline({
    class: _class,
    label,
    labelId,
    occupations,
    locale,
}: ProfileOccupationTimelineProps) {
    return (
        <section class={clsx(_class, "px-8 pt-8 md:pt-24")} aria-labelledby={labelId}>
            <header class="mb-12">
                <SplitContainer>
                    <h1 id={labelId} class="font-light md:text-2xl">{label[locale]}</h1>
                </SplitContainer>
            </header>
            {occupations.map((occupation) => (
                <ProfileOccupationEntry
                    key={occupation.id}
                    occupation={occupation}
                    locale={locale}
                />
            ))}
        </section>
    )
}
