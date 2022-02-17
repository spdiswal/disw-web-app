import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"

export function Residence(props: Localisable<string>) {
    const locale = useLocale()
    
    return (
        <div class="text-center">
            <dt>{{ da: "Bopæl", en: "Residence" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-2xl">{props[locale]}</dd>
        </div>
    )
}
