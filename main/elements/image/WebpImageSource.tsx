import type { Flavour } from "+types"

type WebpImageSourceProps = {
    readonly sourceSet: SourceSet
    readonly sizeHint: SizeHint
    readonly condition?: Condition
}

export function convertToSourceSet(assets: PredefinedImageAssets): SourceSet {
    return Object.entries(assets)
        .map(([width, asset]) => `${asset} ${width}w`)
        .join(",")
}

type PredefinedImageAssets =
    | PredefinedPortraitHeroImageAssets
    | PredefinedStandardHeroImageAssets
    | PredefinedWideHeroImageAssets
    | PredefinedUltraWideHeroImageAssets
    | PredefinedArticleImageAssets

type PredefinedPortraitHeroImageAssets = {
    readonly [W in PredefinedPortraitHeroImageWidth]: string
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

// The aspect ratio is 4:5 for the `xs` viewport (h = 1.2w).
type PredefinedPortraitHeroImageWidth =
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
export const portraitHeroImageSizeHint: SizeHint = "100vw"
export const standardHeroImageSizeHint: SizeHint = "100vw"
export const wideHeroImageSizeHint: SizeHint = "100vw"
export const ultraWideHeroImageSizeHint: SizeHint = "max(120rem, 100vw)"

// See `maxWidth` and `width` in `tailwind.config.cjs`.
export const articleImageSizeHint: SizeHint =
    /*    lg: */ "(min-width: 80rem) calc(50% - 1/2*(5rem)),"
    + /*  md: */ "(min-width: 60rem) calc(50% - 1/2*(4rem)),"
    + /*  sm: */ "(min-width: 40rem) min(calc(1/2*(100rem - 5rem)), calc(100vw - 2*3rem)),"
    + /*  xs: */ "calc(100vw - 2*2rem)"

export const atLeastExtraLargeScreen: Condition = "(min-width: 100rem)"
export const atLeastMediumScreen: Condition = "(min-width: 60rem)"
export const atLeastSmallScreen: Condition = "(min-width: 40rem)"

type SourceSet = string & Flavour<"SourceSet">
type SizeHint = string & Flavour<"SizeHint">
type Condition = string & Flavour<"Condition">

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
