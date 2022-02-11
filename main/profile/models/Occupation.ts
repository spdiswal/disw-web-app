import type { Localisable } from "+i18n"
import type { Flavour, Id } from "+types"

export type Occupation = {
    readonly id: Id<"Occupation">
    readonly title: Title
    readonly organisation: Organisation
    readonly period: Period
    readonly activities: ActivityList
}

export type Title = Localisable<string> & Flavour<"Title">

export type Organisation = {
    readonly name: OrganisationName
    readonly url: OrganisationUrl
}

export type OrganisationName = Localisable<string> & Flavour<"OrganisationName">
export type OrganisationUrl = string & Flavour<"OrganisationUrl">

export type Period = {
    readonly since: PeriodStart
    readonly until: PeriodEnd | null
}

export type PeriodStart = Date & Flavour<"PeriodStart">
export type PeriodEnd = Date & Flavour<"PeriodEnd">

export type ActivityList = ReadonlyArray<Activity>
export type Activity = Localisable<string> & { readonly id: Id<"Activity"> }
