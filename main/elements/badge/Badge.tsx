import clsx from "clsx"
import type { ComponentChildren } from "preact"

type BadgeProps = {
    readonly class?: string
    readonly children: ComponentChildren
}

export function Badge({
    class: _class,
    children,
}: BadgeProps) {
    return (
        <span class={clsx(_class, "inline-flex items-center rounded-full py-0.5 px-2.5 font-medium")}>
            {children}
        </span>
    )
}
