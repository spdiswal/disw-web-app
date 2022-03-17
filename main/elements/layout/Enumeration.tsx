import type { ComponentChildren } from "preact"

type EnumerationProps = {
    readonly children: ComponentChildren
}

export function Enumeration({
    children,
}: EnumerationProps) {
    return (
        <span class="flex flex-col space-y-1.5 sm:space-y-1">
            {children}
        </span>
    )
}
