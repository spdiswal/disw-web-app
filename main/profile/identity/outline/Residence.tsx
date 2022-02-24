import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ResidenceProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function Residence({
    class: _class,
    children,
}: ResidenceProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(_class, "text-center")}>
            <dt>{{ da: "Bopæl", en: "Residence" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{children}</dd>
        </div>
    )
}
