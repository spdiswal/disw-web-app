import type { Locale } from "+i18n"

export type Localisable<Value> = {
    readonly [Key in Locale]: Value
}

/**
 * @return a value which is indistinguishable across all locales
 */
export function indistinguishable<Value>(value: Value): Localisable<Value> {
    return { da: value, en: value }
}
