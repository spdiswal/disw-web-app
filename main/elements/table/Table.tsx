import type { ReadonlyNonEmptyArray } from "+types"
import type { ComponentChild } from "preact"
import { Fragment } from "preact"

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
        <div class="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-600">
            <table>
                <thead class="border-b border-b-neutral-300 dark:border-b-neutral-500">
                    <tr class="bg-neutral-50 text-xs dark:bg-neutral-800">
                        {columns.map((column) => (
                            <Fragment key={column}>
                                {renderColumnHeader(column)}
                            </Fragment>
                        ))}
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
