import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../focus-classes"
import { useListboxButtonConfiguration } from "../listbox"
import { themeSwitchTransitionClasses } from "../transition-classes"
import { commonButtonClasses, transparentButtonClasses } from "./button-classes"

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
