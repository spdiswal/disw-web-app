import type { Multilingual } from "+i18n"
import type { Flavour, Id, ReadonlyDate } from "+types"

export type Occupation = {
    readonly id: Id<"occupation">
    readonly title: Title
    readonly organisation: Organisation
    readonly period: Period
    readonly activities: ReadonlyArray<Activity>
}

export type Title = Multilingual<string> & Flavour<"Title">
export type Organisation = Multilingual<string> & Flavour<"Organisation">

export type Period = {
    readonly since: PeriodStart
    readonly until: PeriodEnd | null
}

export type PeriodStart = ReadonlyDate & Flavour<"PeriodStart">
export type PeriodEnd = ReadonlyDate & Flavour<"PeriodEnd">

export type Activity = Multilingual<string> & { readonly id: Id<"activity"> }
