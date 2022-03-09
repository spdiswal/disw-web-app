import { slowTransitionClasses } from "+elements"
import { useTheme } from "+theme"
import clsx from "clsx"
import { useEffect, useRef } from "preact/hooks"

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
    const darkImageRef = useRef<HTMLImageElement>(null)
    
    useEffect(() => {
        darkImageRef.current?.classList.add("invisible")
    }, [])
    
    useEffect(() => {
        const darkImageElement = darkImageRef.current
        
        if (theme === "dark") {
            darkImageElement?.classList.remove("invisible")
        }
        
        function handleDarkImageTransitionEnd() {
            if (theme === "light") {
                darkImageElement?.classList.add("invisible")
            }
        }
        
        darkImageElement?.addEventListener("transitionend", handleDarkImageTransitionEnd)
        
        return function cleanUp() {
            darkImageElement?.removeEventListener("transitionend", handleDarkImageTransitionEnd)
        }
    }, [theme])
    
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
                    class="pointer-events-none select-none"
                    src={lightSrcSet.fallback}
                    alt={caption}
                />
            </picture>
            <picture>
                <source type="image/webp" srcSet={darkSrcSet.webp}/>
                <img
                    ref={darkImageRef}
                    class={clsx(
                        theme === "dark" ? "opacity-100" : "opacity-0",
                        "pointer-events-none absolute top-0 left-0 select-none",
                        slowTransitionClasses,
                    )}
                    src={darkSrcSet.fallback}
                    alt=""
                />
            </picture>
        </div>
    )
}
