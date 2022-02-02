import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"
import type { ListboxButtonState } from "./Listbox"
import { ListboxBaseButton } from "./ListboxBaseButton"

type ListboxIconButtonProps = {
    readonly class?: ClassValue
    readonly state: ListboxButtonState
    readonly children: ComponentChildren
}

export function ListboxIconButton({
    class: _class,
    state,
    children,
}: ListboxIconButtonProps) {
    return (
        <ListboxBaseButton
            class={[_class, "py-2 px-3"]}
            state={state}
        >
            {children}
        </ListboxBaseButton>
    )
}
