import type { Comparator } from "+types"
import { useMemo, useState } from "preact/hooks"

type UseSortableTableRowsProps<Row extends string> = {
    readonly rows: ReadonlyArray<Row>
    readonly comparator: Comparator<Row>
}

export type SortOrder = "ascending" | "descending"

export function useSortableTableRows<Row extends string>({
    rows,
    comparator,
}: UseSortableTableRowsProps<Row>) {
    const [order, setOrder] = useState<SortOrder>("ascending")
    
    const sortedRows =
        useMemo<ReadonlyArray<Row>>(() => (
            order === "ascending"
                ? [...rows].sort(comparator)
                : [...rows].sort(reversed(comparator))
        ), [rows, comparator, order])
    
    return {
        sortedRows,
        order,
        setOrder,
    }
}

function reversed<Row extends string>(
    comparator: Comparator<Row>,
): Comparator<Row> {
    return (left, right) => comparator(right, left)
}
