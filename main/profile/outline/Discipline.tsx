import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type DisciplineProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function Discipline({
    class: _class,
    children,
}: DisciplineProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(_class, "text-center")}>
            <dt>{{ da: "Baggrund", en: "Discipline" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{children}</dd>
        </div>
    )
}
