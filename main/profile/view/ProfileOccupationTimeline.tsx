import { SplitContainer } from "+elements/layout"
import type { Language, Multilingual } from "+i18n"
import type { OccupationList } from "+profile"
import type { ClassList, Id } from "+types"
import { ProfileOccupationEntry } from "./ProfileOccupationEntry"

type ProfileOccupationTimelineProps = {
    readonly class?: ClassList
    
    readonly label: Multilingual<string>
    readonly labelId: Id<"ProfileOccupationTimeline">
    readonly occupations: OccupationList
    readonly activeLanguage: Language
}

export function ProfileOccupationTimeline({
    class: _class,
    label,
    labelId,
    occupations,
    activeLanguage,
}: ProfileOccupationTimelineProps) {
    return (
        <section class={`pt-8 px-8 / md:pt-24 ${_class ?? ""}`} aria-labelledby={labelId}>
            <header class="mb-12">
                <SplitContainer>
                    <h1 id={labelId} class="font-light / md:text-2xl">{label[activeLanguage]}</h1>
                </SplitContainer>
            </header>
            {occupations.map((occupation) => (
                <ProfileOccupationEntry
                    key={occupation.id}
                    occupation={occupation}
                    activeLanguage={activeLanguage}
                />
            ))}
        </section>
    )
}
