import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, defaultTransitionClasses, focusOutlineInsideClasses } from "../constants"
import { useListboxButtonConfiguration } from "../listbox"
import { commonButtonClasses, transparentButtonClasses } from "./button-constants"

type TransparentButtonProps = {
    readonly class?: string
    readonly onClick?: (event: MouseEvent) => void
    readonly onKeyDown?: (event: KeyboardEvent) => void
    readonly onMouseDown?: (event: MouseEvent) => void
    readonly children: ComponentChildren
}

export function TransparentButton({
    class: _class,
    onClick,
    onKeyDown,
    onMouseDown,
    children,
}: TransparentButtonProps) {
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
                defaultFocusOutlineClasses,
                focusOutlineInsideClasses,
                defaultTransitionClasses,
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
