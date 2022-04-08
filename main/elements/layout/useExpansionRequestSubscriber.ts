import type { ExpansionState, ExpansionRequestSubscriber, ExpansionRequestSubscription } from "+elements"
import { useCallback, useRef } from "preact/hooks"

export function useExpansionRequestSubscriber() {
    const subscriberRef = useRef<ExpansionRequestSubscriber | null>(null)
    
    const expand = useCallback(() => notifySubscriber("expanded"), [])
    const collapse = useCallback(() => notifySubscriber("collapsed"), [])
    
    return { subscribe, expand, collapse }
    
    function subscribe(
        subscriber: ExpansionRequestSubscriber,
    ): ExpansionRequestSubscription {
        subscriberRef.current = subscriber
        return { unsubscribe }
    }
    
    function notifySubscriber(requestedState: ExpansionState) {
        subscriberRef.current?.(requestedState)
    }
    
    function unsubscribe() {
        subscriberRef.current = null
    }
}
