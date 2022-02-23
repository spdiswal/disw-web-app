import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import type { Ref } from "preact/hooks"
import { defaultFocusBorderClasses } from "../constants"
import { commonButtonClasses } from "./button-constants"

type OpaqueButtonProps = {
    readonly forwardRef?: Ref<HTMLButtonElement>
    readonly forwardAriaExpanded?: boolean
    readonly class?: ClassValue
    readonly onClick?: () => void
    readonly onMouseDown?: () => void
    readonly children: ComponentChildren
}

export function OpaqueButton({
    forwardRef,
    forwardAriaExpanded,
    class: _class,
    onClick,
    onMouseDown,
    children,
}: OpaqueButtonProps) {
    return (
        <button
            type="button"
            ref={forwardRef}
            aria-expanded={forwardAriaExpanded}
            class={clsx(
                _class,
                commonButtonClasses,
                "py-2 px-4 bg-neutral-50 hover:bg-white dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-400 drop-shadow-sm md:text-sm",
                defaultFocusBorderClasses,
            )}
            onClick={onClick}
            onMouseDown={onMouseDown}
        >
            {children}
        </button>
    )
}
