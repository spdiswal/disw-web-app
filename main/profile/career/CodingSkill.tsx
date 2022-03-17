import { Badge, themeSwitchTransitionClasses } from "+elements"
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
                "mr-2 mb-2 bg-neutral-400/20 text-sm text-neutral-700 dark:bg-neutral-300/20 dark:text-neutral-200",
                themeSwitchTransitionClasses,
            )}
        >
            {children}
        </Badge>
    )
}
