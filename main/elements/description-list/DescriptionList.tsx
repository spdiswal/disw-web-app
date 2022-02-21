import type { ComponentChildren } from "preact"

type DescriptionListProps = {
    readonly children: ComponentChildren
}

export function DescriptionList({
    children,
}: DescriptionListProps) {
    return (
        <dl class="grid grid-cols-1 gap-y-5 sm:grid-cols-description-list sm:gap-x-4 sm:gap-y-2 lg:gap-x-6">
            {children}
        </dl>
    )
}
