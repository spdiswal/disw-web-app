import type { ExpansionState, ExpansionRequestSubscriber, ExpansionRequestSubscription } from "+elements"
import { useRef } from "preact/hooks"

export function useExpansionRequestSubscriber() {
    const subscriberRef = useRef<ExpansionRequestSubscriber | null>(null)
    
    return {
        subscribe,
        expand: () => notifySubscriber("expanded"),
        collapse: () => notifySubscriber("collapsed"),
    }
    
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
