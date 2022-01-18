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
                "absolute backdrop-blur-md bg-white/75 max-h-56 mt-1 py-1 focus:outline-none overflow-auto ring-1 ring-neutral-900 ring-opacity-10 rounded-md shadow-lg text-base w-full z-50 / md:text-sm",
            )}
            role="listbox"
        >
            {children}
        </ul>
    )
}
