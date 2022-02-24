import type { ComponentChildren } from "preact"

type SkillsProps = {
    readonly title: string
    readonly children: ComponentChildren
}

export function Skills({
    title,
    children,
}: SkillsProps) {
    return (
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xs tracking-wider uppercase">{title}</h2>
            <span class="flex flex-wrap gap-2">{children}</span>
        </div>
    )
}
