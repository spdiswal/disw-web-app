import type { Multilingual } from "+i18n"
import type { Portrait } from "+profile"
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

export type Name = string & Flavour<"Name">
export type AreaOfExpertise = Multilingual<string> & Flavour<"AreaOfExpertise">
export type Age = Multilingual<string> & Flavour<"Age">
export type Residence = Multilingual<string> & Flavour<"Residence">
export type AcademicDiscipline = Multilingual<string> & Flavour<"AcademicDiscipline">
export type WorkExperience = Multilingual<string> & Flavour<"WorkExperience">
