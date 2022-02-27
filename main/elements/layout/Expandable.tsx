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
            <div class={clsx(!isExpanded && "h-40 overflow-y-clip border-b border-neutral-300 shadow-lg dark:border-neutral-600", "w-full")}>
                {children}
            </div>
            <OpaqueButton class={clsx(isExpanded && "hidden", "mt-4 flex items-center gap-x-1")} onClick={onExpansionButtonClicked}>
                <HeroIconPlus class="h-4"/>
                <span>{expandButtonLabel}</span>
            </OpaqueButton>
        </div>
    )
}
