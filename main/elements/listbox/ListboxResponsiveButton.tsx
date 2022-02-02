import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"
import type { ListboxButtonState } from "./Listbox"
import { ListboxBaseButton } from "./ListboxBaseButton"

type ListboxResponsiveButtonProps = {
    readonly class?: ClassValue
    readonly state: ListboxButtonState
    readonly children: ComponentChildren
}

export function ListboxResponsiveButton({
    class: _class,
    state,
    children,
}: ListboxResponsiveButtonProps) {
    return (
        <ListboxBaseButton
            class={[_class, "py-2 px-3 md:relative md:text-sm md:text-left md:bg-neutral-100 md:hover:bg-neutral-50 md:dark:bg-neutral-900 md:dark:hover:bg-neutral-800 md:border md:border-neutral-400 md:shadow-sm md:cursor-default"]}
            state={state}
        >
            {children}
        </ListboxBaseButton>
    )
}
