import type { Ref } from "preact/hooks"
import { useWindowEvent } from "./useWindowEvent"

export function useMouseDownOutsideElementEvent(
    watchedElement: Ref<HTMLElement>,
    onMouseDownOutsideWatchedElement: () => void,
) {
    useWindowEvent("mousedown", ({ target }) => {
        const occurredOutsideWatchedElement = !(target instanceof Element)
            || !watchedElement.current?.contains(target)
        
        if (occurredOutsideWatchedElement) {
            onMouseDownOutsideWatchedElement()
        }
    })
}
