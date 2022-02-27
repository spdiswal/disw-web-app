import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"

type AcknowledgementsProps = {
    readonly children: ComponentChildren
}

export function Achievements({
    children,
}: AcknowledgementsProps) {
    const locale = useLocale()
    
    return (
        <div class="flex flex-col gap-y-4">
            <h2 class="text-xs uppercase tracking-wider">{{ da: "Præstationer", en: "Achievements" }[locale]}</h2>
            {children}
        </div>
    )
}
