import { HeroIconSelector } from "+elements/icons"
import type { ComponentChildren } from "preact"

type ListboxButtonProps = Readonly<{
    isOpen: boolean
    onClick: () => void
    children: ComponentChildren
}>

export function ListboxButton({
    isOpen,
    onClick,
    children,
}: ListboxButtonProps) {
    return (
        <button
            type="button"
            class="bg-transparent border border-neutral-400 focus:border-neutral-300 hover:border-neutral-300 cursor-default focus:outline-none pl-3 pr-10 py-2 relative focus:ring-1 focus:ring-neutral-300 rounded-md shadow-sm text-neutral-300 focus:text-neutral-200 hover:text-neutral-200 text-left w-full / sm:text-sm"
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
