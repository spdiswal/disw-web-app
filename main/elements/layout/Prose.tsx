import type { ComponentChildren } from "preact"

type ProseProps = {
    readonly children: ComponentChildren
}

export function Prose({
    children,
}: ProseProps) {
    return (
        <div class="flex flex-col space-y-3 md:space-y-2">
            {children}
        </div>
    )
}
