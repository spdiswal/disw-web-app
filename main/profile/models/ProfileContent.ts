import type { JsonValue } from "+types"
import { parseISO } from "date-fns"
import type { DeepReadonly } from "ts-essentials"

type ProfileContentTemplate = DeepReadonly<{
    picture: {
        assetUrl: string
        caption: string
    }
    name: string
    ambition: string
    career: Array<{
        title: string
        organisation: string
        period: {
            since: string
            until: string | null
        }
        activities: Array<string>
    }>
}>

export type ProfileContent = DeepReadonly<{
    picture: {
        assetUrl: string
        caption: string
    }
    name: string
    ambition: string
    career: Array<{
        key: string
        title: string
        organisation: string
        period: {
            since: Date
            until: Date | null
        }
        activities: Array<{
            key: string
            description: string
        }>
    }>
}>

export function defineProfileContent(
    template: ProfileContentTemplate,
): ProfileContent {
    return {
        picture: {
            assetUrl: template.picture.assetUrl,
            caption: template.picture.caption,
        },
        name: template.name,
        ambition: template.ambition,
        career: template.career.map((occupation) => ({
            key: hashString(occupation),
            title: occupation.title,
            organisation: occupation.organisation,
            period: {
                since: parseISO(occupation.period.since),
                until: occupation.period.until !== null
                    ? parseISO(occupation.period.until)
                    : null,
            },
            activities: occupation.activities.map((activity) => ({
                key: hashString(activity),
                description: activity,
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
