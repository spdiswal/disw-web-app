import type { Language } from "+i18n"

export type Multilingual<Value> = {
    readonly [Key in Language]: Value
}

/**
 * @return a multilingual value which is indistinguishable across all languages
 */
export function indistinguishable<Value>(value: Value): Multilingual<Value> {
    return { da: value, en: value }
}
