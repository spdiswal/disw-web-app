import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { HeroIconCheck } from "../icons"
import { focusTransitionClasses } from "../transition-classes"
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
                "flex items-center",
                focusTransitionClasses,
            )}
        >
            {children}
            {isSelected
                ? (
                    <HeroIconCheck
                        class={clsx(
                            isHighlighted ? "text-white" : "text-primary-600 dark:text-primary-500",
                            "h-5 w-5",
                            focusTransitionClasses,
                        )}
                    />
                )
                : null}
        </span>
    )
}
