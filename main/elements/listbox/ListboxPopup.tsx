import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ListboxPopupProps = {
    readonly isOpen: boolean
    readonly children: ComponentChildren
}

export function ListboxPopup({ isOpen, children }: ListboxPopupProps) {
    return (
        <ul
            class={clsx(
                !isOpen && "hidden",
                "overflow-auto absolute z-50 py-1 mt-1 w-full max-h-56 text-base bg-white/75 rounded-md focus:outline-none ring-1 ring-neutral-900/10 shadow-lg backdrop-blur-md md:text-sm",
            )}
            role="listbox"
        >
            {children}
        </ul>
    )
}
