import { createContext } from "preact"
import type { Ref } from "preact/hooks"
import { useContext } from "preact/hooks"

type ListboxButtonConfiguration = {
    readonly ref?: Ref<HTMLButtonElement>
    readonly isExpanded?: boolean
    readonly handleKeyDown?: (event: KeyboardEvent) => void
    readonly handleMouseDown?: (event: MouseEvent) => void
}

const ListboxButtonConfigurationContext =
    createContext<ListboxButtonConfiguration>({})

export const ListboxButtonConfigurationProvider =
    ListboxButtonConfigurationContext.Provider

export function useListboxButtonConfiguration() {
    return useContext(ListboxButtonConfigurationContext)
}
