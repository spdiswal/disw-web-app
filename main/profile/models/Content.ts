import type { Multilingual } from "+i18n"
import type { Flavour } from "+types"
import type { Occupation } from "./Occupation"
import type { Portrait } from "./Portrait"

export type Content = {
    readonly portrait: Portrait
    readonly name: Name
    readonly ambition: Ambition
    readonly career: ReadonlyArray<Occupation>
}

export type Name = string & Flavour<"Name">
export type Ambition = Multilingual<string> & Flavour<"Ambition">
