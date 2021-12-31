import { useEffect, useRef } from "preact/hooks"

/**
 * Subscribes to an `eventType` on the `window` object.
 *
 * Note that `eventHandler` has no influence on how the subscription to
 * `eventType` occurs on the `window` object. Hence, a re-subscription will not
 * occur if only the `eventHandler` argument changes at the call site of
 * `useWindowEvent`, e.g. due to passing a new arrow function instance as
 * argument.
 */
export function useWindowEvent<EventType extends keyof WindowEventMap>(
    eventType: EventType,
    eventHandler: (this: Window, event: WindowEventMap[EventType]) => any, // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/prefer-readonly-parameter-types
    options?: boolean | AddEventListenerOptions,
) {
    const cachedEventHandler = useRef(eventHandler)
    cachedEventHandler.current = eventHandler
    
    useEffect(() => {
        const handleEvent = (event: WindowEventMap[EventType]) => {
            cachedEventHandler.current.call(window, event)
        }
        
        window.addEventListener(eventType, handleEvent, options)
        
        return function cleanUp() {
            window.removeEventListener(eventType, handleEvent, options)
        }
    }, [eventType, options])
}
