import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"
import { Subsection } from "../Subsection"

type PractisedSkillsProps = {
    readonly children: ComponentChildren
}

export function PractisedSkills({
    children,
}: PractisedSkillsProps) {
    const locale = useLocale()
    
    return (
        <Subsection heading={{ da: "Praktiserede færdigheder", en: "Practised skills" }[locale]}>
            <span class="flex flex-wrap pt-1">
                {children}
            </span>
        </Subsection>
    )
}
