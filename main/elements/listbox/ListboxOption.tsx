import { HeroIconCheck } from "+elements/icons"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ListboxOptionProps = {
    readonly isSelected: boolean
    readonly onClick: () => void
    readonly children: ComponentChildren
}

export function ListboxOption({
    isSelected,
    onClick,
    children,
}: ListboxOptionProps) {
    return (
        <li
            class={clsx(
                isSelected ? "font-bold" : "font-normal",
                "group relative py-2 pr-9 pl-3 hover:bg-accent-600 cursor-default select-none",
            )}
            role="option"
            aria-selected={isSelected}
            onClick={onClick}
        >
            <div class="flex items-center text-neutral-900 group-hover:text-white">
                {children}
            </div>
            <span
                class={clsx(
                    !isSelected && "hidden",
                    "flex absolute inset-y-0 right-0 items-center pr-4 text-accent-600 group-hover:text-white",
                )}
            >
                <HeroIconCheck class="h-5"/>
            </span>
        </li>
    )
}
