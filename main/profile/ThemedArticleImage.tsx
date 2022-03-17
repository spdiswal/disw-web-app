import { PlaceholderImage, ResponsiveImage } from "+elements"
import { ProgressiveThemedImage } from "+theme"
import type { JSX } from "preact"

type ArticleImageProps = {
    readonly lightSources: JSX.Element
    readonly lightFallbackAsset: string
    readonly darkSources: JSX.Element
    readonly darkFallbackAsset: string
    readonly placeholderAsset: string
    readonly caption: string
}

export function ThemedArticleImage({
    lightSources,
    lightFallbackAsset,
    darkSources,
    darkFallbackAsset,
    placeholderAsset,
    caption,
}: ArticleImageProps) {
    return (
        <ProgressiveThemedImage
            class="overflow-hidden rounded-2xl pb-aspect-ratio-5-3 shadow-lg"
            renderLightThemedImage={(isVisible) => (
                <ResponsiveImage
                    class="absolute z-10 h-full w-full"
                    isVisible={isVisible}
                    sources={lightSources}
                    fallbackAsset={lightFallbackAsset}
                    caption={caption}
                />
            )}
            renderDarkThemedImage={(isVisible) => (
                <ResponsiveImage
                    class="absolute z-10 h-full w-full"
                    isVisible={isVisible}
                    sources={darkSources}
                    fallbackAsset={darkFallbackAsset}
                    caption={caption}
                />
            )}
            placeholderImage={
                <PlaceholderImage
                    class="absolute z-0 h-full"
                    asset={placeholderAsset}
                />
            }
        />
    )
}
