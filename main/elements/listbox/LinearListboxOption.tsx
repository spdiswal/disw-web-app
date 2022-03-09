import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultTransitionClasses } from "../constants"
import { HeroIconCheck } from "../icons"
import { useListboxOptionState } from "./useListboxOptionState"

type LinearListboxOptionProps = {
    readonly children: ComponentChildren
}

export function LinearListboxOption({
    children,
}: LinearListboxOptionProps) {
    const { isHighlighted, isSelected } = useListboxOptionState()
    
    return (
        <span
            class={clsx(
                isHighlighted && "text-white dark:text-white",
                isSelected ? "font-bold" : "font-normal",
                "flex items-center gap-x-4",
                defaultTransitionClasses,
            )}
        >
            {children}
            {isSelected
                ? (
                    <HeroIconCheck
                        class={clsx(
                            isHighlighted ? "text-white" : "text-accent-600 dark:text-accent-500",
                            "h-5 w-5",
                            defaultTransitionClasses,
                        )}
                    />
                )
                : null}
        </span>
    )
}
