import type { Locale } from "+i18n"

export type Localisable<Value> = {
    readonly [Key in Locale]: Value
}
