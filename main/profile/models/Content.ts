import type { Multilingual } from "+i18n"
import type { Flavour } from "+types"
import type { Identity } from "./Identity"
import type { Occupation } from "./Occupation"

export type Content = {
    readonly identity: Identity
    readonly biography: Biography
    readonly career: Career
    readonly education: Education
}

export type Biography = Multilingual<string> & Flavour<"Biography">

export type Career = OccupationList & Flavour<"Career">
export type Education = OccupationList & Flavour<"Education">

export type OccupationList = ReadonlyArray<Occupation>
