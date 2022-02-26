type ElevatedRoundedPortraitProps = {
    readonly assetUrl: string
    readonly caption: string
}

export function ElevatedRoundedPortrait({
    assetUrl,
    caption,
}: ElevatedRoundedPortraitProps) {
    return (
        <img
            class="aspect-square my-8 mx-auto w-60 h-auto rounded-1/3 drop-shadow-xl sm:mt-4 md:relative md:top-36 md:z-10 md:-mt-12 md:mr-0 md:ml-auto md:w-full"
            src={assetUrl}
            alt={caption}
        />
    )
}
