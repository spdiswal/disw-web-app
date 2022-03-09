import clsx from "clsx"
import type { ComponentChildren } from "preact"

type TableCellProps = {
    readonly class?: string
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
