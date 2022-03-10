import { createContext } from "preact"
import type { Ref } from "preact/hooks"
import { useContext } from "preact/hooks"

type ListboxButtonConfiguration = {
    readonly aria: AriaAttributes
    readonly ref?: Ref<HTMLButtonElement>
    readonly handleKeyDown?: (event: KeyboardEvent) => void
    readonly handleMouseDown?: (event: MouseEvent) => void
}

type AriaAttributes = {
    readonly controls?: string
    readonly expanded?: boolean
    readonly hasPopup?: boolean
    readonly labelledBy?: string
}

const ListboxButtonConfigurationContext =
    createContext<ListboxButtonConfiguration>({ aria: {} })

export const ListboxButtonConfigurationProvider =
    ListboxButtonConfigurationContext.Provider

export function useListboxButtonConfiguration() {
    return useContext(ListboxButtonConfigurationContext)
}
