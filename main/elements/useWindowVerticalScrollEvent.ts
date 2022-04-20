import { useRef } from "preact/hooks"
import { useWindowEvent } from "./useWindowEvent"

export type WindowVerticalScrollEventListener =
    (verticalScrollDelta: number) => void

export function useWindowVerticalScrollEvent(
    listener: WindowVerticalScrollEventListener,
) {
    const lastScrollY = useRef(-1)
    
    useWindowEvent("scroll", () => {
        const hasScrolledAfterFocusChange = lastScrollY.current === -1
        const isPullingDownFromTopToRefreshPage = window.scrollY < 0
        
        const verticalScrollDelta = window.scrollY - lastScrollY.current
        lastScrollY.current = window.scrollY
        
        if (isPullingDownFromTopToRefreshPage
            || hasScrolledAfterFocusChange
            || verticalScrollDelta === 0) {
            return
        }
        
        listener(verticalScrollDelta)
    })
}
