import { ExternalHyperlink, SplitContainer } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { Month, Year } from "+types"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type OccupationProps = {
    readonly id: string
    readonly title: string
    readonly organisation: Organisation
    readonly since: YearMonth
    readonly until: YearMonth | "present"
    readonly children: ComponentChildren
}

export type Organisation = {
    readonly name: string
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
                    <h1 id={id} class="font-bold text-primary-600 md:text-2xl">{title}</h1>
                    <ExternalHyperlink url={organisation.url} class="font-semibold">
                        {organisation.name}
                    </ExternalHyperlink>
                </header>
                <div class="flex flex-col gap-y-8 mb-16 md:mb-24 md:max-w-2xl">
                    {children}
                </div>
            </SplitContainer>
        </article>
    )
}

const months: Readonly<Record<Month, Localisable<string>>> = {
    "01": { da: "januar", en: "January" },
    "02": { da: "februar", en: "February" },
    "03": { da: "marts", en: "March" },
    "04": { da: "april", en: "April" },
    "05": { da: "maj", en: "May" },
    "06": { da: "juni", en: "June" },
    "07": { da: "juli", en: "July" },
    "08": { da: "august", en: "August" },
    "09": { da: "september", en: "September" },
    "10": { da: "oktober", en: "October" },
    "11": { da: "november", en: "November" },
    "12": { da: "december", en: "December" },
}

type FormattedYearMonthProps = {
    readonly class?: ClassValue
    readonly yearMonth: YearMonth
}

type YearMonth = `${Year}-${Month}`

function FormattedYearMonth({
    class: _class,
    yearMonth,
}: FormattedYearMonthProps) {
    const locale = useLocale()
    
    const month = months[yearMonth.slice(5, 7) as Month][locale]
    const year = yearMonth.slice(0, 4) as Year
    
    return (
        <time class={clsx(_class)} dateTime={yearMonth}>
            {month}{" "}{year}
        </time>
    )
}
