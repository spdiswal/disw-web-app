import type { ComponentChildren } from "preact"

type LinearOutlineProps = {
    readonly children: ComponentChildren
}

export function LinearOutline({
    children,
}: LinearOutlineProps) {
    return (
        <dl class="flex flex-col gap-y-6 items-center sm:flex-row sm:gap-x-10 sm:justify-center sm:mb-2 md:justify-start md:mb-0 lg:gap-x-16 lg:mb-4">
            {children}
        </dl>
    )
}
