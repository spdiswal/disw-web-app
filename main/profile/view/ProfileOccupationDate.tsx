import type { Language, Multilingual } from "+i18n"
import type { ClassList } from "+types"

const months: ReadonlyArray<Multilingual<string>> = [
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

const thePresent: Multilingual<string> = { da: "nu", en: "present" }

type ProfileOccupationDateProps = {
    readonly class?: ClassList
    readonly date: Date | null
    readonly activeLanguage: Language
}

export function ProfileOccupationDate({
    class: _class,
    date,
    activeLanguage,
}: ProfileOccupationDateProps) {
    return date !== null
        ? (
            <time class={_class} dateTime={date.toISOString()}>
                {/* The `format` function of `date-fns` is very heavy as it
                    covers many other cases of date formatting. */}
                {months[date.getMonth()][activeLanguage]}{" "}{date.getFullYear()}
            </time>
        )
        : <span>{thePresent[activeLanguage]}</span>
}
