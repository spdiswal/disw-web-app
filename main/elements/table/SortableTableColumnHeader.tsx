import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../constants"
import { HeroIconChevronDown, HeroIconChevronUp } from "../icons"
import type { SortOrder } from "./useSortableTableRows"

type SortableTableColumnHeaderProps = {
    readonly order?: SortOrder
    readonly onClick: () => void
    readonly children: ComponentChildren
}

export function SortableTableColumnHeader({
    order,
    onClick,
    children,
}: SortableTableColumnHeaderProps) {
    return (
        <th
            scope="col"
            class="group pointer-events-none p-0 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-50"
            aria-sort={order}
        >
            <button
                type="button"
                class={clsx(
                    "pointer-events-auto flex h-full w-full items-center gap-x-2 py-3 px-6 text-left font-medium uppercase tracking-wider group-first:focus-visible:rounded-tl-xl group-last:focus-visible:rounded-tr-xl",
                    defaultFocusOutlineClasses,
                    focusOutlineInsideClasses,
                )}
                onClick={onClick}
            >
                {children}
                <SortOrderIcon order={order}/>
            </button>
        </th>
    )
}

type SortOrderIconProps = {
    readonly order?: SortOrder
}

function SortOrderIcon({
    order,
}: SortOrderIconProps) {
    if (order === undefined) {
        return <div class="invisible h-4 w-4"/>
    }
    
    switch (order) {
        case "ascending":
            return <HeroIconChevronUp class="h-4"/>
        
        case "descending":
            return <HeroIconChevronDown class="h-4"/>
    }
}
