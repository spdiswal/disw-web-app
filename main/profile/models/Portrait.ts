import type { Multilingual } from "+i18n"
import type { Flavour } from "+types"

export type Portrait = {
    readonly assetUrl: AssetUrl
    readonly caption: Caption
}

export type AssetUrl = string & Flavour<"AssetUrl">
export type Caption = Multilingual<string> & Flavour<"Caption">
