import clsx from "clsx"
import type { ComponentChildren } from "preact"
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
                isHighlighted ? "text-white dark:text-white" : "dark:text-neutral-900",
                isSelected ? "font-bold" : "font-normal",
                "flex items-center gap-x-4"
            )}
        >
            {children}
            {isSelected
                ? <HeroIconCheck class={clsx(isHighlighted ? "text-white" : "text-accent-600", "h-5")}/>
                : null}
        </span>
    )
}
