import type { Language } from "+i18n"
import { languages } from "+i18n"

export type Multilingual<Value> = Readonly<{
    resolveFor: (language: Language) => Value
}>

export function multilingual<Value>(
    value: MultilingualDefinition<Value>,
): Multilingual<Value> {
    return isMultilingualExpression(value)
        ? { resolveFor: (language: Language) => value[language] }
        : { resolveFor: () => value }
}

export type MultilingualDefinition<Value> =
    | IndistinguishableExpression<Value>
    | MultilingualExpression<Value>

type IndistinguishableExpression<Value> = Value

type MultilingualExpression<Value> = Readonly<{
    [Key in Language]: Value
}>

function isMultilingualExpression<Value>(
    value: MultilingualDefinition<Value>,
): value is MultilingualExpression<Value> {
    return typeof value === "object"
        && languages.length === Object.keys(value).length
        && languages.every((language) => Object.keys(value).includes(language))
}
