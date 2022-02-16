import { SplitContainer } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { OccupationList } from "+profile"
import type { Id } from "+types"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import { ProfileOccupationEntry } from "./ProfileOccupationEntry"

type ProfileOccupationTimelineProps = {
    readonly class?: ClassValue
    readonly label: Localisable<string>
    readonly labelId: Id<"ProfileOccupationTimeline">
    readonly occupations: OccupationList
}

export function ProfileOccupationTimeline({
    class: _class,
    label,
    labelId,
    occupations,
}: ProfileOccupationTimelineProps) {
    const locale = useLocale()
    
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
                />
            ))}
        </section>
    )
}
