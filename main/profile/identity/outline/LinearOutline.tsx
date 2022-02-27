import type { ComponentChildren } from "preact"

type LinearOutlineProps = {
    readonly children: ComponentChildren
}

export function LinearOutline({
    children,
}: LinearOutlineProps) {
    return (
        <dl class="flex flex-col items-center gap-y-6 sm:mb-2 sm:flex-row sm:justify-center sm:gap-x-10 md:mb-0 md:justify-start lg:mb-4 lg:gap-x-16">
            {children}
        </dl>
    )
}
