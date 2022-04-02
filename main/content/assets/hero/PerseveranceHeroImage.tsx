import { atLeastExtraLargeScreen, atLeastMediumScreen, atLeastSmallScreen, atMostExtraSmallScreen, atMostLargeScreen, atMostSmallScreen, convertToSourceSet, squareHeroImageSizeHint, standardHeroImageSizeHint, ultraWideHeroImageSizeHint, WebpImageSource, wideHeroImageSizeHint } from "+elements"
import { useLocale } from "+i18n"
import type { ImageAssetToPreload } from "+profile"
import { HeroImage } from "+profile"
import { Fragment } from "preact"
import fallbackJpeg from "./perseverance-fallback.jpeg"
import placeholderJpeg from "./perseverance-placeholder.jpeg"
import squareWebp1280w from "./perseverance-square-1280w.webp"
import squareWebp1440w from "./perseverance-square-1440w.webp"
import squareWebp320w from "./perseverance-square-320w.webp"
import squareWebp480w from "./perseverance-square-480w.webp"
import squareWebp640w from "./perseverance-square-640w.webp"
import squareWebp960w from "./perseverance-square-960w.webp"
import standardWebp1440w from "./perseverance-standard-1440w.webp"
import standardWebp1680w from "./perseverance-standard-1680w.webp"
import standardWebp1920w from "./perseverance-standard-1920w.webp"
import standardWebp720w from "./perseverance-standard-720w.webp"
import standardWebp840w from "./perseverance-standard-840w.webp"
import standardWebp960w from "./perseverance-standard-960w.webp"
import ultraWideWebp1760w from "./perseverance-ultrawide-1760w.webp"
import ultraWideWebp1920w from "./perseverance-ultrawide-1920w.webp"
import wideWebp1120w from "./perseverance-wide-1120w.webp"
import wideWebp1280w from "./perseverance-wide-1280w.webp"
import wideWebp1440w from "./perseverance-wide-1440w.webp"
import wideWebp1600w from "./perseverance-wide-1600w.webp"
import wideWebp2240w from "./perseverance-wide-2240w.webp"
import wideWebp2560w from "./perseverance-wide-2560w.webp"

const squareSourceSet = convertToSourceSet({
    320: squareWebp320w,
    480: squareWebp480w,
    640: squareWebp640w,
    960: squareWebp960w,
    1280: squareWebp1280w,
    1440: squareWebp1440w,
})

const standardSourceSet = convertToSourceSet({
    720: standardWebp720w,
    840: standardWebp840w,
    960: standardWebp960w,
    1440: standardWebp1440w,
    1680: standardWebp1680w,
    1920: standardWebp1920w,
})

const wideSourceSet = convertToSourceSet({
    1120: wideWebp1120w,
    1280: wideWebp1280w,
    1440: wideWebp1440w,
    1600: wideWebp1600w,
    2240: wideWebp2240w,
    2560: wideWebp2560w,
})

const ultraWideSourceSet = convertToSourceSet({
    1760: ultraWideWebp1760w,
    1920: ultraWideWebp1920w,
})

export const preloadedPerseveranceHeroImageSources: ReadonlyArray<ImageAssetToPreload> = [
    {
        contentType: "image",
        condition: atMostExtraSmallScreen,
        fallbackUrl: fallbackJpeg,
        sourceSet: squareSourceSet,
        sizeHint: squareHeroImageSizeHint,
    },
    {
        contentType: "image",
        condition: `${atLeastSmallScreen} and ${atMostSmallScreen}`,
        fallbackUrl: fallbackJpeg,
        sourceSet: standardSourceSet,
        sizeHint: standardHeroImageSizeHint,
    },
    {
        contentType: "image",
        condition: `${atLeastMediumScreen} and ${atMostLargeScreen}`,
        fallbackUrl: fallbackJpeg,
        sourceSet: wideSourceSet,
        sizeHint: wideHeroImageSizeHint,
    },
    {
        contentType: "image",
        condition: atLeastExtraLargeScreen,
        fallbackUrl: fallbackJpeg,
        sourceSet: ultraWideSourceSet,
        sizeHint: ultraWideHeroImageSizeHint,
    },
]

export function PerseveranceHeroImage() {
    const locale = useLocale()
    
    return (
        <HeroImage
            sources={
                <Fragment>
                    <WebpImageSource
                        sourceSet={ultraWideSourceSet}
                        condition={atLeastExtraLargeScreen}
                        sizeHint={ultraWideHeroImageSizeHint}
                    />
                    <WebpImageSource
                        sourceSet={wideSourceSet}
                        condition={atLeastMediumScreen}
                        sizeHint={wideHeroImageSizeHint}
                    />
                    <WebpImageSource
                        sourceSet={standardSourceSet}
                        condition={atLeastSmallScreen}
                        sizeHint={standardHeroImageSizeHint}
                    />
                    <WebpImageSource
                        sourceSet={squareSourceSet}
                        sizeHint={squareHeroImageSizeHint}
                    />
                </Fragment>
            }
            fallbackAsset={fallbackJpeg}
            placeholderAsset={placeholderJpeg}
            caption={{
                da: "Mit selvportræt på Mars. Jeg har boret to huller i et klippestykke foran mig og lavet hjulspor i det røde sand. Horisonten er en smule diset. Courtesy NASA/JPL-Caltech.",
                en: "My self-portrait on Mars. I have drilled two holes in a rock in front of me and made wheel tracks in the red soil. The horizon is slightly hazy. Courtesy NASA/JPL-Caltech.",
            }[locale]}
        />
    )
}
