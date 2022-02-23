import { ExternalHyperlink, SplitContainer } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"
import type { YearMonth } from "./FormattedYearMonth"
import { FormattedYearMonth } from "./FormattedYearMonth"

type OccupationProps = {
    readonly id: string
    readonly title: Localisable<string>
    readonly organisation: Organisation
    readonly since: YearMonth
    readonly until: YearMonth | "present"
    readonly children: ComponentChildren
}

export type Organisation = {
    readonly name: Localisable<string>
    readonly url: string
}

export function Occupation({
    id,
    title,
    organisation,
    since,
    until,
    children,
}: OccupationProps) {
    const locale = useLocale()
    
    return (
        <article aria-labelledby={id}>
            <SplitContainer
                complementary={
                    <div class="flex overflow-y-clip relative gap-x-10 justify-start h-full md:justify-end lg:gap-x-16">
                        <div class="flex mb-6 font-light md:flex-col md:items-end md:mb-0 md:text-right">
                            <FormattedYearMonth class="md:text-xl lg:mb-1 lg:text-2xl" yearMonth={since}/>
                            <span>
                                &ndash;
                                {until !== "present"
                                    ? <FormattedYearMonth yearMonth={until}/>
                                    : <span>{{ da: "nu", en: "present" }[locale]}</span>}
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
                <header class="flex flex-col mb-4 md:gap-y-1 md:mb-6">
                    <h1 id={id} class="font-bold text-primary-600 md:text-2xl">{title[locale]}</h1>
                    <ExternalHyperlink url={organisation.url} class="block w-fit font-semibold">
                        {organisation.name[locale]}
                    </ExternalHyperlink>
                </header>
                <div class="flex flex-col gap-y-6 mb-16 md:mb-24">
                    {children}
                </div>
            </SplitContainer>
        </article>
    )
}
