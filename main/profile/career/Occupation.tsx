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
                    <div class="relative flex h-full justify-start gap-x-10 overflow-y-clip md:justify-end lg:gap-x-16">
                        <div class="mb-6 flex font-light md:mb-0 md:flex-col md:items-end md:text-right">
                            <FormattedYearMonth class="md:text-xl lg:mb-1 lg:text-2xl" yearMonth={since}/>
                            <span>
                                &ndash;
                                {until !== "present"
                                    ? <FormattedYearMonth yearMonth={until}/>
                                    : <span>{{ da: "nu", en: "present" }[locale]}</span>}
                            </span>
                        </div>
                        <span
                            class="relative z-10 hidden aspect-square h-8 w-8 rounded-full border-2 border-neutral-600 dark:border-neutral-400 md:block"
                            aria-hidden="true"
                        />
                        <span
                            class="absolute top-8 right-4 z-0 hidden h-full w-px bg-neutral-600/40 dark:bg-neutral-400/40 md:block"
                            aria-hidden="true"
                        />
                    </div>
                }
            >
                <header class="mb-4 flex flex-col md:mb-6 md:gap-y-1">
                    <h1 id={id} class="font-bold text-primary-600 md:text-2xl">{title}</h1>
                    <ExternalHyperlink url={organisation.url} class="font-semibold">
                        {organisation.name}
                    </ExternalHyperlink>
                </header>
                <div class="mb-16 flex flex-col gap-y-8 md:mb-24 md:max-w-2xl">
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
