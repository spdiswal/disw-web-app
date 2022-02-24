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
        <td class={clsx(_class, "py-4 px-6")}>
            {children}
        </td>
    )
}
