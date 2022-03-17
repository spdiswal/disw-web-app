import { articleImageSizeHint, convertToSourceSet, WebpImageSource } from "+elements"
import { useLocale } from "+i18n"
import { ThemedArticleImage } from "+profile"
import dayWebp1040w from "./jezero-day-1040w.webp"
import dayWebp1280w from "./jezero-day-1280w.webp"
import dayWebp1520w from "./jezero-day-1520w.webp"
import dayWebp400w from "./jezero-day-400w.webp"
import dayWebp520w from "./jezero-day-520w.webp"
import dayWebp640w from "./jezero-day-640w.webp"
import dayWebp760w from "./jezero-day-760w.webp"
import dayWebp800w from "./jezero-day-800w.webp"
import dayFallbackJpeg from "./jezero-day-fallback.jpeg"
import nightWebp1040w from "./jezero-night-1040w.webp"
import nightWebp1280w from "./jezero-night-1280w.webp"
import nightWebp1520w from "./jezero-night-1520w.webp"
import nightWebp400w from "./jezero-night-400w.webp"
import nightWebp520w from "./jezero-night-520w.webp"
import nightWebp640w from "./jezero-night-640w.webp"
import nightWebp760w from "./jezero-night-760w.webp"
import nightWebp800w from "./jezero-night-800w.webp"
import nightFallbackJpeg from "./jezero-night-fallback.jpeg"
import placeholderJpeg from "./jezero-placeholder.jpeg"

const daySourceSet = convertToSourceSet({
    400: dayWebp400w,
    520: dayWebp520w,
    640: dayWebp640w,
    760: dayWebp760w,
    800: dayWebp800w,
    1040: dayWebp1040w,
    1280: dayWebp1280w,
    1520: dayWebp1520w,
})

const nightSourceSet = convertToSourceSet({
    400: nightWebp400w,
    520: nightWebp520w,
    640: nightWebp640w,
    760: nightWebp760w,
    800: nightWebp800w,
    1040: nightWebp1040w,
    1280: nightWebp1280w,
    1520: nightWebp1520w,
})

export function JezeroArticleImage() {
    const locale = useLocale()
    
    return (
        <ThemedArticleImage
            lightSources={
                <WebpImageSource
                    sourceSet={daySourceSet}
                    sizeHint={articleImageSizeHint}
                />
            }
            lightFallbackAsset={dayFallbackJpeg}
            darkSources={
                <WebpImageSource
                    sourceSet={nightSourceSet}
                    sizeHint={articleImageSizeHint}
                />
            }
            darkFallbackAsset={nightFallbackJpeg}
            placeholderAsset={placeholderJpeg}
            caption={{
                da: "Kampesten i Jezero-krateret.",
                en: "Boulders in the Jezero Crater.",
            }[locale]}
        />
    )
}
