import { Badge } from "+elements"
import type { ComponentChildren } from "preact"

type CodingSkillProps = {
    readonly children: ComponentChildren
}

export function CodingSkill({
    children,
}: CodingSkillProps) {
    return (
        <Badge class="text-sm text-neutral-600 dark:text-neutral-300 bg-neutral-600/10 dark:bg-neutral-300/20">
            {children}
        </Badge>
    )
}
