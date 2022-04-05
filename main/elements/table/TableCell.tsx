import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { themeSwitchTransitionClasses } from "../transition-classes"

type TableCellProps = {
    readonly class?: string
    readonly children: ComponentChildren
}

export function TableCell({
    class: _class,
    children,
}: TableCellProps) {
    return (
        <td
            class={clsx(
                _class,
                "py-4 px-6 text-neutral-900 dark:text-neutral-50",
                themeSwitchTransitionClasses,
            )}
        >
            {children}
        </td>
    )
}
