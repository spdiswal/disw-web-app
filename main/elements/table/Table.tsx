import type { ReadonlyNonEmptyArray } from "+types"
import clsx from "clsx"
import type { ComponentChild } from "preact"
import { Fragment } from "preact"
import { defaultTransitionClasses } from "../constants"

type TableProps<Column extends string, Row extends string> = {
    readonly columns: ReadonlyNonEmptyArray<Column>
    readonly rows: ReadonlyArray<Row>
    readonly renderColumnHeader: (column: Column) => ComponentChild
    readonly renderRow: (row: Row) => ComponentChild
}

export function Table<Column extends string, Row extends string>({
    columns,
    rows,
    renderColumnHeader,
    renderRow,
}: TableProps<Column, Row>) {
    return (
        <div
            class={clsx(
                "overflow-x-auto rounded-xl border border-neutral-200 shadow-lg dark:border-neutral-600",
                defaultTransitionClasses,
            )}
        >
            <table class="w-full">
                <thead
                    class={clsx(
                        "border-b border-b-neutral-300 dark:border-b-neutral-500",
                        defaultTransitionClasses,
                    )}
                >
                    <tr
                        class={clsx(
                            "bg-neutral-50 text-xs dark:bg-neutral-800",
                            defaultTransitionClasses,
                        )}
                    >
                        {columns.map((column) => (
                            <Fragment key={column}>
                                {renderColumnHeader(column)}
                            </Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody class="text-sm">
                    {rows.map((row) => (
                        <tr
                            key={row}
                            class={clsx(
                                "odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-700 dark:even:bg-neutral-800",
                                defaultTransitionClasses,
                            )}
                        >
                            {renderRow(row)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
