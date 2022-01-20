import { Paragraph, SplitContainer } from "+elements/layout"
import type { Language } from "+i18n"
import type { Occupation } from "+profile"
import { ProfileOccupationDate } from "./ProfileOccupationDate"

type ProfileOccupationEntryProps = {
    readonly occupation: Occupation
    readonly activeLanguage: Language
}

export function ProfileOccupationEntry({
    occupation: { id, title, organisation, period, activities },
    activeLanguage,
}: ProfileOccupationEntryProps) {
    return (
        <article aria-labelledby={id}>
            <SplitContainer
                complementary={
                    <div class="flex overflow-y-clip relative flex-row gap-x-12 justify-start h-full md:justify-end lg:gap-x-16">
                        <div class="flex flex-row mb-4 font-light md:flex-col md:items-end md:mb-0 md:text-right">
                            <ProfileOccupationDate
                                class="md:mb-1 md:text-2xl"
                                date={period.since}
                                activeLanguage={activeLanguage}
                            />
                            <span>
                                &ndash;
                                <ProfileOccupationDate
                                    date={period.until}
                                    activeLanguage={activeLanguage}
                                />
                            </span>
                        </div>
                        <span
                            class="aspect-square hidden relative z-10 w-8 h-8 rounded-full border-2 border-neutral-600 md:block"
                            aria-hidden="true"
                        />
                        <span
                            class="hidden absolute top-8 right-4 z-0 w-px h-full bg-neutral-600/40 md:block"
                            aria-hidden="true"
                        />
                    </div>
                }
            >
                <header class="mb-4">
                    <h1 id={id} class="font-bold text-primary-600 md:mb-1 md:text-2xl">{title[activeLanguage]}</h1>
                    <p class="font-semibold">{organisation[activeLanguage]}</p>
                </header>
                <div class="flex flex-col gap-y-2 mb-12 md:mb-24">
                    {activities.map((activity) => (
                        <Paragraph key={activity.id}>
                            {activity[activeLanguage]}
                        </Paragraph>
                    ))}
                </div>
            </SplitContainer>
        </article>
    )
}
