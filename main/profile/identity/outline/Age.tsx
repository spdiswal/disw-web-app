import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type AgeProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function Age({
    class: _class,
    children,
}: AgeProps) {
    const locale = useLocale()
    
    return (
        <div class={clsx(_class, "text-center")}>
            <dt>{{ da: "Alder", en: "Age" }[locale]}</dt>
            <dd class="font-bold text-primary-600 md:text-xl lg:text-2xl">{children}</dd>
        </div>
    )
}
