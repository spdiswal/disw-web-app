import { HeroIconCheck } from "+elements/icons"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type ListboxOptionProps = Readonly<{
    isSelected: boolean
    onClick: () => void
    children: ComponentChildren
}>

export function ListboxOption({
    isSelected,
    onClick,
    children,
}: ListboxOptionProps) {
    return (
        <li
            class={clsx(
                isSelected ? "font-bold" : "font-normal",
                "hover:bg-accent-600 cursor-default group pl-3 pr-9 py-2 relative select-none",
            )}
            role="option"
            aria-selected={isSelected}
            onClick={onClick}
        >
            <div class="flex items-center text-black group-hover:text-white">
                {children}
            </div>
            <span
                class={clsx(
                    !isSelected && "hidden",
                    "absolute flex inset-y-0 items-center pr-4 right-0 text-accent-800 group-hover:text-white",
                )}
            >
                <HeroIconCheck class="h-5"/>
            </span>
        </li>
    )
}
