import { atLeastExtraLargeScreen, atLeastMediumScreen, atLeastSmallScreen, convertToSourceSet, portraitHeroImageSizeHint, standardHeroImageSizeHint, ultraWideHeroImageSizeHint, WebpImageSource, wideHeroImageSizeHint } from "+elements"
import { useLocale } from "+i18n"
import { HeroImage } from "+profile"
import { Fragment } from "preact"
import fallbackJpeg from "./perseverance-fallback.jpeg"
import placeholderJpeg from "./perseverance-placeholder.jpeg"
import portraitWebp1280w from "./perseverance-portrait-1280w.webp"
import portraitWebp1440w from "./perseverance-portrait-1440w.webp"
import portraitWebp320w from "./perseverance-portrait-320w.webp"
import portraitWebp480w from "./perseverance-portrait-480w.webp"
import portraitWebp640w from "./perseverance-portrait-640w.webp"
import portraitWebp960w from "./perseverance-portrait-960w.webp"
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

const portraitSourceSet = convertToSourceSet({
    320: portraitWebp320w,
    480: portraitWebp480w,
    640: portraitWebp640w,
    960: portraitWebp960w,
    1280: portraitWebp1280w,
    1440: portraitWebp1440w,
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
                        sourceSet={portraitSourceSet}
                        sizeHint={portraitHeroImageSizeHint}
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
