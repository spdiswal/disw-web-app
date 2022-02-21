import type { ComponentChildren } from "preact"

type ProseProps = {
    readonly children: ComponentChildren
}

export function Prose({
    children,
}: ProseProps) {
    return (
        <span class="flex flex-col gap-y-3 max-w-prose">
            {children}
        </span>
    )
}
