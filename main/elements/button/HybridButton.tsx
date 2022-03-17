import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../focus-classes"
import { useListboxButtonConfiguration } from "../listbox"
import { themeSwitchTransitionClasses } from "../transition-classes"
import { commonButtonClasses, transparentButtonClasses } from "./button-classes"

type HybridButtonProps = {
    readonly class?: string
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
    const { aria, ref, handleKeyDown, handleMouseDown } =
        useListboxButtonConfiguration()
    
    return (
        <button
            ref={ref}
            type="button"
            class={clsx(
                _class,
                commonButtonClasses,
                transparentButtonClasses,
                "md:border md:border-neutral-400 md:bg-neutral-100 md:py-2 md:px-4 md:text-sm md:drop-shadow-sm md:hover:bg-white md:dark:bg-neutral-800 md:dark:hover:bg-neutral-700",
                defaultFocusOutlineClasses,
                focusOutlineInsideClasses,
                themeSwitchTransitionClasses,
            )}
            onClick={onClick}
            onKeyDown={handleKeyDown ?? onKeyDown}
            onMouseDown={handleMouseDown ?? onMouseDown}
            aria-controls={aria.controls}
            aria-expanded={aria.expanded}
            aria-haspopup={aria.hasPopup}
            aria-labelledby={aria.labelledBy}
        >
            {children}
        </button>
    )
}
