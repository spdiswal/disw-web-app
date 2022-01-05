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
                "absolute backdrop-blur-md bg-white/70 max-h-56 mt-1 py-1 focus:outline-none overflow-auto rounded-md shadow-lg text-base w-full z-1 / sm:text-sm",
            )}
            role="listbox"
        >
            {children}
        </ul>
    )
}
