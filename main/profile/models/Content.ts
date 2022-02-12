import type { Localisable } from "+i18n"
import type { Flavour } from "+types"
import type { Identity } from "./Identity"
import type { Occupation } from "./Occupation"

export type Content = {
    readonly identity: Identity
    readonly biography: Biography
    readonly career: Career
    readonly education: Education
    readonly socialLinks: SocialLinks
}

export type Biography = Localisable<string> & Flavour<"Biography">

export type Career = OccupationList & Flavour<"Career">
export type Education = OccupationList & Flavour<"Education">
export type OccupationList = ReadonlyArray<Occupation>

export type SocialLinks = {
    readonly githubUrl: GitHubUrl
}

export type GitHubUrl = string & Flavour<"GitHubUrl">
