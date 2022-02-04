import type { Localisable } from "+i18n"
import type { Flavour } from "+types"

export type Portrait = {
    readonly assetUrl: AssetUrl
    readonly caption: Caption
}

export type AssetUrl = string & Flavour<"AssetUrl">
export type Caption = Localisable<string> & Flavour<"Caption">
