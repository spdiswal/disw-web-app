import type { ComponentChildren } from "preact"

type SubsectionProps = {
    readonly heading: string
    readonly children: ComponentChildren
}

export function Subsection({
    heading,
    children,
}: SubsectionProps) {
    return (
        <div>
            <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300">{heading}</h2>
            <div class="sm:px-3">
                {children}
            </div>
        </div>
    )
}
