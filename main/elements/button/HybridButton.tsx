import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../constants"
import { useListboxButtonConfiguration } from "../listbox"
import { commonButtonClasses, transparentButtonClasses } from "./button-constants"

type HybridButtonProps = {
    readonly class?: ClassValue
    readonly onClick?: (event: MouseEvent) => void
    readonly onKeyDown?: (event: KeyboardEvent) => void
    readonly onMouseDown?: (event: MouseEvent) => void
    readonly children: ComponentChildren
}

export function HybridButton({
    class: _class,
    onClick,
    onKeyDown,
    onMouseDown,
    children,
}: HybridButtonProps) {
    const {
        ref,
        isExpanded,
        handleKeyDown,
        handleMouseDown,
    } = useListboxButtonConfiguration()
    
    return (
        <button
            type="button"
            ref={ref}
            aria-expanded={isExpanded}
            class={clsx(
                _class,
                commonButtonClasses,
                transparentButtonClasses,
                "md:border md:border-neutral-400 md:bg-neutral-50 md:py-2 md:px-4 md:text-sm md:drop-shadow-sm md:hover:bg-white md:dark:bg-neutral-800 md:dark:hover:bg-neutral-700",
                defaultFocusOutlineClasses,
                focusOutlineInsideClasses,
            )}
            onClick={onClick}
            onKeyDown={handleKeyDown ?? onKeyDown}
            onMouseDown={handleMouseDown ?? onMouseDown}
        >
            {children}
        </button>
    )
}
