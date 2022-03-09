import { useEffect, useRef } from "preact/hooks"

export type WindowEventType = keyof WindowEventMap

export type WindowEventListener<EventType extends WindowEventType> =
    (this: Window, event: WindowEventMap[EventType]) => void

/**
 * Subscribes to an `eventType` on the `window` object.
 *
 * Note that `listener` has no influence on how the subscription to `eventType`
 * occurs on the `window` object. Hence, a re-subscription will not occur if
 * only the `listener` argument changes at the call site of `useWindowEvent`,
 * e.g. due to passing a new arrow function instance as argument.
 */
export function useWindowEvent<EventType extends WindowEventType>(
    eventType: EventType,
    listener: WindowEventListener<EventType>,
    options?: boolean | AddEventListenerOptions,
) {
    const cachedListener = useRef(listener)
    cachedListener.current = listener
    
    useEffect(() => {
        function handleEvent(event: WindowEventMap[EventType]) {
            cachedListener.current.call(window, event)
        }
        
        window.addEventListener(eventType, handleEvent, options)
        
        return function cleanUp() {
            window.removeEventListener(eventType, handleEvent, options)
        }
    }, [eventType, options])
}
