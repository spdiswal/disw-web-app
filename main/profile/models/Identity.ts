import type { Localisable } from "+i18n"
import type { Flavour } from "+types"

export type Identity = {
    readonly portrait: Portrait
    readonly name: Name
    readonly areaOfExpertise: AreaOfExpertise
    readonly age: Age
    readonly residence: Residence
    readonly academicDiscipline: AcademicDiscipline
    readonly workExperience: WorkExperience
}

export type Portrait = {
    readonly assetUrl: AssetUrl
    readonly caption: Caption
}

export type AssetUrl = string & Flavour<"AssetUrl">
export type Caption = Localisable<string> & Flavour<"Caption">

export type Name = string & Flavour<"Name">
export type AreaOfExpertise = Localisable<string> & Flavour<"AreaOfExpertise">
export type Age = Localisable<string> & Flavour<"Age">
export type Residence = Localisable<string> & Flavour<"Residence">
export type AcademicDiscipline = Localisable<string> & Flavour<"AcademicDiscipline">
export type WorkExperience = Localisable<string> & Flavour<"WorkExperience">
