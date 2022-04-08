import { expandableTransitionClasses, HeroIconMinus, HeroIconPlus, OpaqueButton, useWindowEvent } from "+elements"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"

type ExpandableProps = {
    readonly buttonLabels: ExpansionButtonLabels
    readonly subscribeToExpansionRequests?:
        (subscriber: ExpansionRequestSubscriber) => ExpansionRequestSubscription
    readonly children: ComponentChildren
}

type ExpansionButtonLabels = {
    readonly expanded: string
    readonly collapsed: string
}

export type ExpansionState = "collapsed" | "expanded"

export type ExpansionRequestSubscriber =
    (requestedState: ExpansionState) => void

export type ExpansionRequestSubscription = {
    readonly unsubscribe: () => void
}

export function Expandable({
    buttonLabels: {
        collapsed: collapsedButtonLabel,
        expanded: expandedButtonLabel,
    },
    subscribeToExpansionRequests,
    children,
}: ExpandableProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    
    const [state, setState] = useState<ExpansionState>("collapsed")
    const [contentHeight, setContentHeight] = useState(0)
    
    useEffect(() => {
        if (subscribeToExpansionRequests !== undefined) {
            const { unsubscribe } = subscribeToExpansionRequests(setState)
            
            return function cleanUp() {
                unsubscribe()
            }
        }
    }, [subscribeToExpansionRequests])
    
    useEffect(() => {
        setContentHeight(contentRef.current?.scrollHeight ?? 0)
    }, [children])
    
    useWindowEvent("resize", () => {
        setContentHeight(contentRef.current?.scrollHeight ?? 0)
    })
    
    useEffect(() => {
        if (containerRef.current !== null) {
            if (state === "expanded") {
                containerRef.current.style.height = `calc(${contentHeight}px + 3rem)`
            } else {
                containerRef.current.style.height = "8rem"
            }
        }
    }, [state, contentHeight])
    
    return (
        <div class="-mx-3 flex flex-col items-center">
            <div
                ref={containerRef}
                class={clsx(
                    "relative w-full overflow-y-hidden px-3",
                    expandableTransitionClasses,
                )}
            >
                <div ref={contentRef}>
                    {children}
                </div>
                <div
                    class={clsx(
                        state === "collapsed" ? "visible opacity-100" : "invisible opacity-0",
                        "absolute inset-x-0 bottom-0 h-0 border-t border-neutral-200 shadow-border-t dark:border-neutral-600",
                        expandableTransitionClasses,
                    )}
                />
            </div>
            <OpaqueButton
                class="relative bottom-5 flex h-10 items-center shadow-lg"
                onClick={toggleExpansion}
            >
                {state === "collapsed"
                    ? <HeroIconPlus class="mr-2 h-4 w-4"/>
                    : <HeroIconMinus class="mr-2 h-4 w-4"/>}
                {state === "collapsed"
                    ? <span>{collapsedButtonLabel}</span>
                    : <span>{expandedButtonLabel}</span>}
            </OpaqueButton>
        </div>
    )
    
    function toggleExpansion() {
        setState((currentState) => (
            currentState === "collapsed" ? "expanded" : "collapsed"
        ))
    }
}
