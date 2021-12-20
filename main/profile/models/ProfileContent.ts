import type { Multilingual, MultilingualDefinition } from "+i18n"
import { multilingual } from "+i18n"
import type { JsonValue } from "+types"
import { parseISO } from "date-fns"
import type { DeepReadonly } from "ts-essentials"

type ProfileContentTemplate = DeepReadonly<{
    picture: {
        assetUrl: string
        caption: MultilingualDefinition<string>
    }
    name: string
    ambition: MultilingualDefinition<string>
    career: Array<{
        title: MultilingualDefinition<string>
        organisation: MultilingualDefinition<string>
        period: {
            since: string
            until: string | null
        }
        activities: Array<MultilingualDefinition<string>>
    }>
}>

export type ProfileContent = DeepReadonly<{
    picture: {
        assetUrl: string
        caption: Multilingual<string>
    }
    name: string
    ambition: Multilingual<string>
    career: Array<{
        key: string
        title: Multilingual<string>
        organisation: Multilingual<string>
        period: {
            since: Date
            until: Date | null
        }
        activities: Array<{
            key: string
            description: Multilingual<string>
        }>
    }>
}>

export function defineProfileContent(
    template: ProfileContentTemplate,
): ProfileContent {
    return {
        picture: {
            assetUrl: template.picture.assetUrl,
            caption: multilingual(template.picture.caption),
        },
        name: template.name,
        ambition: multilingual(template.ambition),
        career: template.career.map((occupation) => ({
            key: hashString(occupation),
            title: multilingual(occupation.title),
            organisation: multilingual(occupation.organisation),
            period: {
                since: parseISO(occupation.period.since),
                until: occupation.period.until !== null
                    ? parseISO(occupation.period.until)
                    : null,
            },
            activities: occupation.activities.map((activity) => ({
                key: hashString(activity),
                description: multilingual(activity),
            })),
        })),
    }
}

/**
 * Adapted from the `cyrb53` hash function.
 *
 * @author bryc
 * @see {@link https://stackoverflow.com/a/52171480 Stack Overflow}
 */
function hashString(value: JsonValue, seed = 0): string {
    const str = JSON.stringify(value)
    
    /* eslint-disable no-bitwise */
    let h1 = 0xdeadbeef ^ seed
    let h2 = 0x41c6ce57 ^ seed
    
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i)
        h1 = Math.imul(h1 ^ ch, 2654435761)
        h2 = Math.imul(h2 ^ ch, 1597334677)
    }
    
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507)
        ^ Math.imul(h2 ^ h2 >>> 13, 3266489909)
    
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507)
        ^ Math.imul(h1 ^ h1 >>> 13, 3266489909)
    
    const result = 4294967296 * (2097151 & h2) + (h1 >>> 0)
    /* eslint-enable no-bitwise */
    
    return result.toString(16)
}
