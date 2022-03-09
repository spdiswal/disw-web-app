import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses, defaultTransitionClasses, focusOutlineInsideClasses } from "../constants"
import { useListboxButtonConfiguration } from "../listbox"
import { commonButtonClasses } from "./button-constants"

type OpaqueButtonProps = {
    readonly class?: string
    readonly onClick?: (event: MouseEvent) => void
    readonly onKeyDown?: (event: KeyboardEvent) => void
    readonly onMouseDown?: (event: MouseEvent) => void
    readonly children: ComponentChildren
}

export function OpaqueButton({
    class: _class,
    onClick,
    onKeyDown,
    onMouseDown,
    children,
}: OpaqueButtonProps) {
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
                "border border-neutral-400 bg-neutral-100 py-2 px-4 drop-shadow-sm hover:bg-white dark:bg-neutral-800 dark:hover:bg-neutral-700 md:text-sm",
                defaultFocusOutlineClasses,
                focusOutlineInsideClasses,
                defaultTransitionClasses,
            )}
            onClick={onClick}
            onKeyDown={handleKeyDown ?? onKeyDown}
            onMouseDown={handleMouseDown ?? onMouseDown}
        >
            {children}
        </button>
    )
}
