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
            class="bg-neutral-100 hover:bg-neutral-50 border border-neutral-400 focus:border-accent-600 cursor-default focus:outline-none pl-3 pr-10 py-2 relative focus:ring-1 focus:ring-accent-600 rounded-md shadow-sm text-neutral-900 text-left w-full / md:text-sm"
            aria-expanded={isOpen}
            onClick={onClick}
        >
            <span class="flex items-center">
                {children}
            </span>
            <span class="absolute flex inset-y-0 items-center ml-3 pointer-events-none pr-2 right-0">
                <HeroIconSelector class="h-5"/>
            </span>
        </button>
    )
}
