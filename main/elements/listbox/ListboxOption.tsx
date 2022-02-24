import clsx from "clsx"
import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"

type ListboxOptionProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function ListboxOption({
    class: _class,
    children,
}: ListboxOptionProps) {
    return (
        <span class={clsx(_class, "group-hover:text-white dark:text-neutral-900")}>
            {children}
        </span>
    )
}
