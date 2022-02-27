import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"

type PractisedSkillsProps = {
    readonly children: ComponentChildren
}

export function PractisedSkills({
    children,
}: PractisedSkillsProps) {
    const locale = useLocale()
    
    return (
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xs uppercase tracking-wider">{{ da: "Praktiserede færdigheder", en: "Practised skills" }[locale]}</h2>
            <span class="flex flex-wrap gap-2">{children}</span>
        </div>
    )
}
