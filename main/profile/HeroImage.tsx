import { PlaceholderImage, ProgressiveImage, ResponsiveImage } from "+elements"
import type { JSX } from "preact"

type HeroImageProps = {
    readonly sources: JSX.Element
    readonly fallbackAsset: string
    readonly placeholderAsset: string
    readonly caption: string
}

export function HeroImage({
    sources,
    fallbackAsset,
    placeholderAsset,
    caption,
}: HeroImageProps) {
    return (
        <ProgressiveImage
            class="w-full overflow-hidden pb-aspect-ratio-4-5 sm:pb-aspect-ratio-4-3 md:pb-aspect-ratio-5-2 xl:pb-aspect-ratio-10-3 2xl:rounded-b-2xl"
            originalImage={
                <ResponsiveImage
                    class="absolute z-10 h-full w-full object-contain object-center"
                    sources={sources}
                    fallbackAsset={fallbackAsset}
                    caption={caption}
                />
            }
            placeholderImage={
                <PlaceholderImage
                    class="absolute z-0 h-full object-contain object-center xl:w-full"
                    asset={placeholderAsset}
                />
            }
        />
    )
}
