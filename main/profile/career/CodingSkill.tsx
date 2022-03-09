import { Badge, defaultTransitionClasses } from "+elements"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type CodingSkillProps = {
    readonly children: ComponentChildren
}

export function CodingSkill({
    children,
}: CodingSkillProps) {
    return (
        <Badge
            class={clsx(
                "mr-2 mb-2 bg-neutral-600/10 text-sm text-neutral-600 dark:bg-neutral-300/20 dark:text-neutral-300",
                defaultTransitionClasses,
            )}
        >
            {children}
        </Badge>
    )
}
