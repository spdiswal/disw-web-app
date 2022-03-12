import { slowestTransitionClasses } from "+elements"
import { useTheme } from "+theme"
import clsx from "clsx"

type ThemeAwarePictureProps = {
    readonly class?: string
    readonly lightSrcSet: ImageSources
    readonly darkSrcSet: ImageSources
    readonly caption: string
}

type ImageSources = {
    readonly webp: string // 752x423 pixels at standard resolution; 1504x846 pixels at high resolution.
    readonly fallback: string // 752x423 pixels.
}

export function ThemeAwarePicture({
    class: _class,
    lightSrcSet,
    darkSrcSet,
    caption,
}: ThemeAwarePictureProps) {
    const theme = useTheme()
    
    return (
        <div
            class={clsx(
                _class ?? "overflow-hidden rounded-2xl shadow-lg",
                "relative w-fit",
            )}
        >
            <picture>
                <source type="image/webp" srcSet={lightSrcSet.webp}/>
                <img
                    class={clsx(
                        theme === "light" ? "visible opacity-100" : "invisible opacity-0",
                        "pointer-events-none select-none",
                        slowestTransitionClasses,
                    )}
                    src={lightSrcSet.fallback}
                    alt={caption}
                />
            </picture>
            <picture>
                <source type="image/webp" srcSet={darkSrcSet.webp}/>
                <img
                    class={clsx(
                        theme === "dark" ? "visible opacity-100" : "invisible opacity-0",
                        "pointer-events-none absolute top-0 left-0 select-none",
                        slowestTransitionClasses,
                    )}
                    src={darkSrcSet.fallback}
                    alt={caption}
                />
            </picture>
        </div>
    )
}
