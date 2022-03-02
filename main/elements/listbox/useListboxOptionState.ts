import { createContext } from "preact"
import { useContext } from "preact/hooks"

type ListboxOptionState = {
    readonly isSelected?: boolean
    readonly isHighlighted?: boolean
}

const ListboxOptionStateContext =
    createContext<ListboxOptionState>({})

export const ListboxOptionStateProvider =
    ListboxOptionStateContext.Provider

export function useListboxOptionState() {
    return useContext(ListboxOptionStateContext)
}
