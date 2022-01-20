import { HeroIconSelector } from "+elements/icons"
import type { ComponentChildren } from "preact"

type ListboxButtonProps = {
    readonly isOpen: boolean
    readonly onClick: () => void
    readonly children: ComponentChildren
}

export function ListboxButton({
    isOpen,
    onClick,
    children,
}: ListboxButtonProps) {
    return (
        <button
            type="button"
            class="relative py-2 pr-10 pl-3 w-full text-left text-neutral-900 bg-neutral-100 hover:bg-neutral-50 rounded-md border border-neutral-400 focus:border-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600 shadow-sm cursor-default md:text-sm"
            aria-expanded={isOpen}
            onClick={onClick}
        >
            <span class="flex items-center">
                {children}
            </span>
            <span class="flex absolute inset-y-0 right-0 items-center pr-2 ml-3 pointer-events-none">
                <HeroIconSelector class="h-5"/>
            </span>
        </button>
    )
}
