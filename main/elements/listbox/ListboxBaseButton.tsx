import type { ListboxButtonState } from "+elements"
import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ListboxBaseButtonProps = {
    readonly class?: ClassValue
    readonly state: ListboxButtonState
    readonly children: ComponentChildren
}

export function ListboxBaseButton({
    class: _class,
    state: { ref, isExpanded, onMouseDown },
    children,
}: ListboxBaseButtonProps) {
    return (
        <button
            ref={ref}
            class={clsx(_class, "text-neutral-800 dark:text-neutral-100 rounded-md focus-visible:border focus-visible:border-accent-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-600")}
            type="button"
            aria-expanded={isExpanded}
            onMouseDown={onMouseDown}
        >
            {children}
        </button>
    )
}
