import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import type { Ref } from "preact/hooks"
import { defaultFocusOutlineClasses, focusOutlineInsideClasses } from "../constants"
import { commonButtonClasses, transparentButtonClasses } from "./button-constants"

type TransparentButtonProps = {
    readonly forwardRef?: Ref<HTMLButtonElement>
    readonly forwardAriaExpanded?: boolean
    readonly class?: ClassValue
    readonly onClick?: () => void
    readonly onMouseDown?: () => void
    readonly children: ComponentChildren
}

export function TransparentButton({
    forwardRef,
    forwardAriaExpanded,
    class: _class,
    onClick,
    onMouseDown,
    children,
}: TransparentButtonProps) {
    return (
        <button
            type="button"
            ref={forwardRef}
            aria-expanded={forwardAriaExpanded}
            class={clsx(
                _class,
                commonButtonClasses,
                transparentButtonClasses,
                defaultFocusOutlineClasses,
                focusOutlineInsideClasses,
            )}
            onClick={onClick}
            onMouseDown={onMouseDown}
        >
            {children}
        </button>
    )
}
