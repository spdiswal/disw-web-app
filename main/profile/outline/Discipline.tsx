import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"

type DisciplineProps = Localisable<string> & {
    readonly class?: ClassValue
}

export function Discipline(props: DisciplineProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(props.class, "text-center")}>
            <dt>{{ da: "Baggrund", en: "Discipline" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{props[locale]}</dd>
        </div>
    )
}
