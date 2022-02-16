import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"

const months: ReadonlyArray<Localisable<string>> = [
    { da: "januar", en: "January" },
    { da: "februar", en: "February" },
    { da: "marts", en: "March" },
    { da: "april", en: "April" },
    { da: "maj", en: "May" },
    { da: "juni", en: "June" },
    { da: "juli", en: "July" },
    { da: "august", en: "August" },
    { da: "september", en: "September" },
    { da: "oktober", en: "October" },
    { da: "november", en: "November" },
    { da: "december", en: "December" },
]

const thePresent: Localisable<string> = { da: "nu", en: "present" }

type ProfileOccupationDateProps = {
    readonly class?: ClassValue
    readonly date: Date | null
}

export function ProfileOccupationDate({
    class: _class,
    date,
}: ProfileOccupationDateProps) {
    const locale = useLocale()
    
    return date !== null
        ? (
            <time class={clsx(_class)} dateTime={date.toISOString()}>
                {/* The `format` function of `date-fns` is very heavy as it
                    covers many other cases of date formatting. */}
                {months[date.getMonth()][locale]}{" "}{date.getFullYear()}
            </time>
        )
        : <span>{thePresent[locale]}</span>
}
