import type { ReadonlyNonEmptyArray } from "+types"
import clsx from "clsx"
import type { ComponentChild } from "preact"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../constants"

type TableProps<Column extends string, Row extends string> = {
    readonly columns: ReadonlyNonEmptyArray<Column>
    readonly rows: ReadonlyArray<Row>
    readonly onColumnHeaderClicked?: (column: Column) => void
    readonly renderColumnHeader: (column: Column) => ComponentChild
    readonly renderRow: (row: Row) => ComponentChild
}

export function Table<Column extends string, Row extends string>({
    columns,
    rows,
    onColumnHeaderClicked,
    renderColumnHeader,
    renderRow,
}: TableProps<Column, Row>) {
    return (
        <div class="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-600">
            <table class="divide-y divide-neutral-300 dark:divide-neutral-500">
                <thead class="bg-neutral-50 text-xs dark:bg-neutral-800">
                    <tr>
                        {columns.map((column, index) => {
                            const isFirstColumn = index === 0
                            const isLastColumn = index === columns.length - 1
                            
                            return (
                                <th
                                    key={column}
                                    scope="col"
                                    class={clsx(
                                        "p-0 text-neutral-600 dark:text-neutral-200",
                                        onColumnHeaderClicked && "hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-neutral-50",
                                    )}
                                >
                                    <button
                                        type="button"
                                        class={clsx(
                                            "h-full w-full py-3 px-6 text-left font-medium uppercase tracking-wider",
                                            defaultFocusOutlineClasses,
                                            focusOutlineInsideClasses,
                                            isFirstColumn && "focus-visible:rounded-tl-xl",
                                            isLastColumn && "focus-visible:rounded-tr-xl",
                                        )}
                                        onClick={() => {
                                            onColumnHeaderClicked?.(column)
                                        }}
                                    >
                                        {renderColumnHeader(column)}
                                    </button>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody class="text-sm">
                    {rows.map((row) => (
                        <tr key={row} class="odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-700 dark:even:bg-neutral-800">
                            {renderRow(row)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
