import clsx from "clsx"
import type { ComponentChild } from "preact"

type TableProps<Column extends string, Row extends string> = {
    readonly columns: ReadonlyArray<Column>
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
                <thead class="bg-neutral-50 dark:bg-neutral-700">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column}
                                scope="col"
                                class={clsx(
                                    onColumnHeaderClicked && "hover:text-neutral-700 dark:hover:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-600 cursor-pointer select-none",
                                    "py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-600 dark:text-neutral-200 uppercase"
                                )}
                                onClick={() => onColumnHeaderClicked?.(column)}
                            >
                                {renderColumnHeader(column)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row} class="odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-800 dark:even:bg-neutral-700">
                            {renderRow(row)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
