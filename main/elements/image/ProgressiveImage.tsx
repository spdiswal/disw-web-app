import clsx from "clsx"
import type { JSX } from "preact"

type ProgressiveImageProps = {
    readonly class?: string
    readonly placeholderImage: JSX.Element
    readonly originalImage: JSX.Element
}

export function ProgressiveImage({
    class: _class,
    placeholderImage,
    originalImage,
}: ProgressiveImageProps) {
    return (
        <div class={clsx(_class, "relative")}>
            {originalImage}
            {placeholderImage}
        </div>
    )
}
