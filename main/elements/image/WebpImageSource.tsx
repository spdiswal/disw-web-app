import type { Flavour } from "+types"

type WebpImageSourceProps = {
    readonly sourceSet: ImageSourceSourceSet
    readonly sizeHint: ImageSourceSizeHint
    readonly condition?: ImageSourceCondition
}

export function convertToSourceSet(
    assets: PredefinedImageAssets,
): ImageSourceSourceSet {
    return Object.entries(assets)
        .map(([width, asset]) => `${asset} ${width}w`)
        .join(",")
}

type PredefinedImageAssets =
    | PredefinedSquareHeroImageAssets
    | PredefinedStandardHeroImageAssets
    | PredefinedWideHeroImageAssets
    | PredefinedUltraWideHeroImageAssets
    | PredefinedArticleImageAssets

type PredefinedSquareHeroImageAssets = {
    readonly [W in PredefinedSquareHeroImageWidth]: string
}

type PredefinedStandardHeroImageAssets = {
    readonly [W in PredefinedStandardHeroImageWidth]: string
}

type PredefinedWideHeroImageAssets = {
    readonly [W in PredefinedWideHeroImageWidth]: string
}

type PredefinedUltraWideHeroImageAssets = {
    readonly [W in PredefinedUltraWideHeroImageWidth]: string
}

type PredefinedArticleImageAssets = {
    readonly [W in PredefinedArticleImageWidth]: string
}

// The aspect ratio is 1:1 (square) for the `xs` viewport (h = 1.0w).
type PredefinedSquareHeroImageWidth =
    | 320 | 480 | 640
    | /* High pixel density counterparts: */ 960 | 1280 | 1440

// The aspect ratio is 4:3 for the `sm` viewport (h = 0.75w).
type PredefinedStandardHeroImageWidth =
    | 720 | 840 | 960
    | /* High pixel density counterparts: */ 1440 | 1680 | 1920

// The aspect ratio is 5:2 for the `md` and `lg` viewports (h = 0.4w).
type PredefinedWideHeroImageWidth =
    | 1120 | 1280 | 1440 | 1600
    | /* High pixel density counterparts: */ 2240 | 2560

// The aspect ratio is 10:3 for the `xl` and `2xl` viewports (h = 0.3w).
type PredefinedUltraWideHeroImageWidth =
    | 1760 | 1920

// The aspect ratio is 5:3 for all viewports (h = 0.6w).
type PredefinedArticleImageWidth =
    | 400 | 520 | 640 | 760
    | /* High pixel density counterparts: */ 800 | 1040 | 1280 | 1520

// See `maxWidth` in `tailwind.config.cjs`.
export const squareHeroImageSizeHint: ImageSourceSizeHint = "100vw"
export const standardHeroImageSizeHint: ImageSourceSizeHint = "100vw"
export const wideHeroImageSizeHint: ImageSourceSizeHint = "100vw"
export const ultraWideHeroImageSizeHint: ImageSourceSizeHint = "max(120rem, 100vw)"

// See `maxWidth` and `width` in `tailwind.config.cjs`.
export const articleImageSizeHint: ImageSourceSizeHint =
    /*    lg: */ "(min-width: 80rem) calc(50% - 1/2*(5rem)),"
    + /*  md: */ "(min-width: 60rem) calc(50% - 1/2*(4rem)),"
    + /*  sm: */ "(min-width: 40rem) min(calc(1/2*(100rem - 5rem)), calc(100vw - 2*3rem)),"
    + /*  xs: */ "calc(100vw - 2*2rem)"

export const atLeastExtraLargeScreen: ImageSourceCondition = "(min-width: 100rem)"
export const atMostLargeScreen: ImageSourceCondition = "(max-width: 99.99rem)"
export const atLeastMediumScreen: ImageSourceCondition = "(min-width: 60rem)"
export const atMostSmallScreen: ImageSourceCondition = "(max-width: 59.99rem)"
export const atLeastSmallScreen: ImageSourceCondition = "(min-width: 40rem)"
export const atMostExtraSmallScreen: ImageSourceCondition = "(max-width: 39.99rem)"

export type ImageSourceSourceSet = string & Flavour<"SourceSet">
export type ImageSourceSizeHint = string & Flavour<"SizeHint">
export type ImageSourceCondition = string & Flavour<"Condition">

export function WebpImageSource({
    sourceSet,
    sizeHint,
    condition,
}: WebpImageSourceProps) {
    return (
        <source
            type="image/webp"
            srcSet={sourceSet}
            sizes={sizeHint}
            media={condition}
        />
    )
}
