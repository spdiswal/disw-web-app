import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { useState } from "preact/hooks"
import { slowestTransitionClasses } from "../constants"

type ResponsiveImageProps = {
    readonly class?: string
    readonly isVisible?: boolean
    readonly sources: ComponentChildren
    readonly fallbackAsset: string
    readonly caption: string
}

export function ResponsiveImage({
    class: _class,
    isVisible,
    sources,
    fallbackAsset,
    caption,
}: ResponsiveImageProps) {
    const [isLoaded, setLoaded] = useState(false)
    
    return (
        <picture>
            {sources}
            <img
                class={clsx(
                    _class,
                    isLoaded && (isVisible ?? true) ? "visible opacity-100" : "invisible opacity-0",
                    slowestTransitionClasses,
                )}
                ref={(imageElement) => {
                    if (imageElement?.complete) {
                        setLoaded(true)
                    }
                }}
                onLoad={() => setLoaded(true)}
                src={fallbackAsset}
                alt={caption}
                draggable={false}
            />
        </picture>
    )
}
