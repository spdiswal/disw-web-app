import { ExternalHyperlink, Paragraph, SplitContainer } from "+elements"
import { useLocale } from "+i18n"
import type { Occupation } from "+profile"
import { ProfileOccupationDate } from "./ProfileOccupationDate"

type ProfileOccupationEntryProps = {
    readonly occupation: Occupation
}

export function ProfileOccupationEntry({
    occupation: { id, title, organisation, period, activities },
}: ProfileOccupationEntryProps) {
    const locale = useLocale()
    
    return (
        <article aria-labelledby={id}>
            <SplitContainer
                complementary={
                    <div class="flex overflow-y-clip relative gap-x-12 justify-start h-full md:justify-end lg:gap-x-16">
                        <div class="flex mb-4 font-light md:flex-col md:items-end md:mb-0 md:text-right">
                            <ProfileOccupationDate
                                class="md:mb-1 md:text-xl lg:text-2xl"
                                date={period.since}
                            />
                            <span>
                                &ndash;
                                <ProfileOccupationDate date={period.until}/>
                            </span>
                        </div>
                        <span
                            class="aspect-square hidden relative z-10 w-8 h-8 rounded-full border-2 border-neutral-600 dark:border-neutral-400 md:block"
                            aria-hidden="true"
                        />
                        <span
                            class="hidden absolute top-8 right-4 z-0 w-px h-full bg-neutral-600/40 dark:bg-neutral-400/40 md:block"
                            aria-hidden="true"
                        />
                    </div>
                }
            >
                <header class="mb-3 md:mb-1">
                    <h1 id={id} class="font-bold text-primary-600 md:text-2xl">{title[locale]}</h1>
                    <ExternalHyperlink url={organisation.url} class="block pr-3 pb-1 w-fit font-semibold md:pt-1 md:pb-3">
                        {organisation.name[locale]}
                    </ExternalHyperlink>
                </header>
                <div class="flex flex-col gap-y-2 mb-16 md:mb-24">
                    {activities.map((activity) => (
                        <Paragraph key={activity.id}>
                            {activity[locale]}
                        </Paragraph>
                    ))}
                </div>
            </SplitContainer>
        </article>
    )
}
