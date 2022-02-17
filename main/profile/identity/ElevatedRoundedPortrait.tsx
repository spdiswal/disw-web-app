import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"

type PortraitProps = {
    readonly assetUrl: string
    readonly caption: Localisable<string>
}

export function ElevatedRoundedPortrait({
    assetUrl,
    caption,
}: PortraitProps) {
    const locale = useLocale()
    
    return (
        <img
            class="aspect-square my-8 mx-auto w-60 h-auto rounded-1/3 drop-shadow-xl md:relative md:top-36 md:z-10 md:-mt-12 md:w-full"
            src={assetUrl}
            alt={caption[locale]}
        />
    )
}
