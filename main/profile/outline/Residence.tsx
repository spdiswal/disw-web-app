import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"

type ResidenceProps = Localisable<string> & {
    readonly class?: ClassValue
}

export function Residence(props: ResidenceProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(props.class, "text-center")}>
            <dt>{{ da: "Bopæl", en: "Residence" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{props[locale]}</dd>
        </div>
    )
}
