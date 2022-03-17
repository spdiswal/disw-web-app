import { ExternalHyperlink, responsiveTextSizeTransitionClasses, visibilityTransitionClasses } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import { Article } from "+profile"
import type { Month, ReadonlyNonEmptyArray, Year } from "+types"
import clsx from "clsx"
import type { ComponentChildren, JSX } from "preact"

type OccupationProps = {
    readonly id: string
    readonly title: string
    readonly organisation: Organisation
    readonly periods: ReadonlyNonEmptyArray<Period>
    readonly image: JSX.Element
    readonly swapped?: true
    readonly children: ComponentChildren
}

export type Organisation = {
    readonly name: string
    readonly url: string
}

export type Period = {
    readonly since: YearMonth
    readonly until: YearMonth | null
}

export function Occupation({
    id,
    title,
    organisation,
    periods,
    image,
    swapped,
    children,
}: OccupationProps) {
    return (
        <Article
            id={id}
            image={image}
            renderHeader={(bookmark, labelId) => (
                <header class="mb-4 -ml-6 sm:-ml-7 md:mb-6 md:-ml-9 lg:mb-8 lg:-ml-10">
                    {periods.map((period) => (
                        <FormattedPeriod key={period.since} period={period}/>
                    ))}
                    <div class="group mt-4 mb-0.5 flex flex-row items-center md:mt-6 md:mb-1.5">
                        <span
                            class={clsx(
                                "absolute opacity-0 focus-within:opacity-100 group-hover:opacity-100",
                                visibilityTransitionClasses,
                            )}
                        >
                            {bookmark}
                        </span>
                        <h1
                            id={labelId}
                            class={clsx(
                                "ml-6 text-2xl font-bold sm:ml-7 md:ml-9 md:text-3xl lg:ml-10",
                                responsiveTextSizeTransitionClasses,
                            )}
                        >
                            {title}
                        </h1>
                    </div>
                    <div class="ml-6 sm:ml-7 md:ml-9 lg:ml-10">
                        <ExternalHyperlink url={organisation.url} class="text-lg font-semibold md:text-xl">
                            {organisation.name}
                        </ExternalHyperlink>
                    </div>
                </header>
            )}
            swapped={swapped}
        >
            {children}
        </Article>
    )
}

type FormattedPeriodProps = {
    readonly period: Period
}

function FormattedPeriod({
    period: { since, until },
}: FormattedPeriodProps) {
    return (
        <div
            class={clsx(
                "mb-0.5 ml-6 text-lg font-light sm:ml-7 md:mb-1.5 md:ml-9 md:text-xl lg:ml-10",
                responsiveTextSizeTransitionClasses,
            )}
        >
            <FormattedYearMonth yearMonth={since}/>
            &ndash;
            {until !== null
                ? <FormattedYearMonth yearMonth={until}/>
                : null}
        </div>
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
    readonly yearMonth: YearMonth
}

type YearMonth = `${Year}-${Month}`

function FormattedYearMonth({
    yearMonth,
}: FormattedYearMonthProps) {
    const locale = useLocale()
    
    const month = months[yearMonth.slice(5, 7) as Month][locale]
    const year = yearMonth.slice(0, 4) as Year
    
    return (
        <time dateTime={yearMonth}>
            {month}{" "}{year}
        </time>
    )
}
