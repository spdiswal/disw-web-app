import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"

type ExperienceProps = Localisable<string> & {
    readonly class?: ClassValue
}

export function Experience(props: ExperienceProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(props.class, "text-center")}>
            <dt>{{ da: "Erfaring", en: "Experience" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{props[locale]}</dd>
        </div>
    )
}
