import { Badge } from "+elements"
import type { ComponentChildren } from "preact"

type CodingSkillProps = {
    readonly children: ComponentChildren
}

export function CodingSkill({
    children,
}: CodingSkillProps) {
    return (
        <Badge class="text-sm text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-700">
            {children}
        </Badge>
    )
}
