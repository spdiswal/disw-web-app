import type { Multilingual } from "+i18n"
import type { Flavour, Id } from "+types"

export type Occupation = {
    readonly id: Id<"Occupation">
    readonly title: Title
    readonly organisation: Organisation
    readonly period: Period
    readonly activities: ActivityList
}

export type Title = Multilingual<string> & Flavour<"Title">
export type Organisation = Multilingual<string> & Flavour<"Organisation">

export type Period = {
    readonly since: PeriodStart
    readonly until: PeriodEnd | null
}

export type PeriodStart = Date & Flavour<"PeriodStart">
export type PeriodEnd = Date & Flavour<"PeriodEnd">

export type ActivityList = ReadonlyArray<Activity>
export type Activity = Multilingual<string> & { readonly id: Id<"Activity"> }
