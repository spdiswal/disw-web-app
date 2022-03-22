import type { ImageSourceCondition, ImageSourceSizeHint, ImageSourceSourceSet } from "+elements"

export function convertToLinkElement(asset: AssetToPreload): string {
    switch (asset.contentType) {
        case "image":
            return convertImageAssetToLinkElement(asset)
    }
}

function convertImageAssetToLinkElement(asset: ImageAssetToPreload): string {
    const { fallbackUrl, sourceSet, sizeHint, condition } = asset
    return `<link rel="preload" href="${fallbackUrl}"  as="image" type="image/webp" media="${condition}" imagesrcset="${sourceSet}" imagesizes="${sizeHint}"/>`
}

export type AssetToPreload =
    | ImageAssetToPreload

export type ImageAssetToPreload = {
    readonly contentType: "image"
    readonly fallbackUrl: string
    readonly sourceSet: ImageSourceSourceSet
    readonly sizeHint: ImageSourceSizeHint
    readonly condition: ImageSourceCondition
}
