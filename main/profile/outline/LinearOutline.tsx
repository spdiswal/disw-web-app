import type { ComponentChildren } from "preact"

type LinearOutlineProps = {
    readonly children: ComponentChildren
}

export function LinearOutline({
    children,
}: LinearOutlineProps) {
    return (
        <dl class="flex flex-col gap-y-6 items-center sm:flex-row sm:gap-x-10 sm:justify-center sm:mb-4 md:gap-x-12 md:justify-start lg:gap-x-16">
            {children}
        </dl>
    )
}
