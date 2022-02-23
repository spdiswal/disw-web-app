import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import type { Ref } from "preact/hooks"
import { defaultFocusBorderClasses } from "../constants"
import { commonButtonClasses, transparentButtonClasses } from "./button-constants"

type HybridButtonProps = {
    readonly forwardRef?: Ref<HTMLButtonElement>
    readonly forwardAriaExpanded?: boolean
    readonly class?: ClassValue
    readonly onClick?: () => void
    readonly onMouseDown?: () => void
    readonly children: ComponentChildren
}

export function HybridButton({
    forwardRef,
    forwardAriaExpanded,
    class: _class,
    onClick,
    onMouseDown,
    children,
}: HybridButtonProps) {
    return (
        <button
            type="button"
            ref={forwardRef}
            aria-expanded={forwardAriaExpanded}
            class={clsx(
                _class,
                commonButtonClasses,
                transparentButtonClasses,
                "md:py-2 md:px-4 md:text-sm md:bg-neutral-50 md:hover:bg-white md:dark:bg-neutral-800 md:dark:hover:bg-neutral-700 md:border md:border-neutral-400 md:drop-shadow-sm",
                defaultFocusBorderClasses,
            )}
            onClick={onClick}
            onMouseDown={onMouseDown}
        >
            {children}
        </button>
    )
}
