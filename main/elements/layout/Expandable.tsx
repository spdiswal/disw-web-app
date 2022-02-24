import { HeroIconPlus, OpaqueButton } from "+elements"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ExpandableProps = {
    readonly expandButtonLabel: string
    readonly isExpanded: boolean
    readonly onExpansionButtonClicked?: () => void
    readonly children: ComponentChildren
}

export function Expandable({
    expandButtonLabel,
    isExpanded,
    onExpansionButtonClicked,
    children,
}: ExpandableProps) {
    return (
        <div class="flex flex-col items-center">
            <div class={clsx(!isExpanded && "overflow-y-clip h-40 border-b border-neutral-300 dark:border-neutral-600 shadow-lg", "w-full")}>
                {children}
            </div>
            <OpaqueButton class={clsx(isExpanded && "hidden", "flex gap-x-1 items-center mt-4")} onClick={onExpansionButtonClicked}>
                <HeroIconPlus class="h-4"/>
                <span>{expandButtonLabel}</span>
            </OpaqueButton>
        </div>
    )
}
