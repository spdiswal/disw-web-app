import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type TableCellProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function TableCell({
    class: _class,
    children,
}: TableCellProps) {
    return (
        <td class={clsx(_class, "py-4 px-6 text-sm text-neutral-900 dark:text-neutral-50")}>
            {children}
        </td>
    )
}
