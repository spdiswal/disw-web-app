import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { Month, Year } from "+types"
import type { ClassValue } from "clsx"
import clsx from "clsx"

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

export type YearMonth = `${Year}-${Month}`

export function FormattedYearMonth({
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
