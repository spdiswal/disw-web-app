import type { Language } from "+i18n"
import { supportedLanguages } from "+i18n"

export type UsePreferredLanguageOptions = {
    readonly languagesOrderedByPreference: ReadonlyArray<string>
    readonly fallbackLanguage: Language
}

export type UsePreferredLanguageHook = {
    readonly preferredLanguage: Language
}

/**
 * @return the most preferred language among the given
 * `languagesOrderedByPreference`, or `fallbackLanguage` if none of them are
 * supported by the app
 * @see Language
 */
export function usePreferredLanguage({
    languagesOrderedByPreference,
    fallbackLanguage,
}: UsePreferredLanguageOptions): UsePreferredLanguageHook {
    const mostPreferredSupportedLanguage = languagesOrderedByPreference
        .map(toPrefix)
        .find(isSupported)
    
    return {
        preferredLanguage: mostPreferredSupportedLanguage ?? fallbackLanguage,
    }
}

function toPrefix(language: string): string {
    return language.split("-")[0].toLowerCase()
}

function isSupported(language: string): language is Language {
    return (supportedLanguages as ReadonlyArray<string>).includes(language)
}
