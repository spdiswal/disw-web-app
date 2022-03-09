import { HeroIconPlus, OpaqueButton } from "+elements"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultTransitionClasses } from "../constants"

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
            <div class={clsx(!isExpanded && "-mx-4 sm:-mx-6", "w-full")}>
                <div
                    class={clsx(
                        !isExpanded && "-mx-4 h-40 overflow-y-hidden border-b-2 border-neutral-300 px-4 dark:border-neutral-600 sm:-mx-6 sm:px-6",
                        defaultTransitionClasses,
                    )}
                >
                    {children}
                </div>
            </div>
            <OpaqueButton class={clsx(isExpanded && "hidden", "mt-4 flex items-center shadow-lg")} onClick={onExpansionButtonClicked}>
                <HeroIconPlus class="mr-2 h-4 w-4"/>
                <span>{expandButtonLabel}</span>
            </OpaqueButton>
        </div>
    )
}
