import type { Language } from "+i18n"
import { supportedLanguages } from "+i18n"

export type UsePreferredLanguageOptions = {
    readonly fallbackLanguage: Language
}

export type UsePreferredLanguageHook = {
    readonly preferredLanguage: Language
}

/**
 * @return the language preferred by the web browser, or `fallbackLanguage` if
 * the preferred language is unsupported or undefined
 */
export function usePreferredLanguage({
    fallbackLanguage,
}: UsePreferredLanguageOptions): UsePreferredLanguageHook {
    return {
        preferredLanguage: navigator.languages.map(toPrefix).find(isSupported)
            ?? fallbackLanguage,
    }
}

function toPrefix(language: string): string {
    return language.split("-")[0].toLowerCase()
}

function isSupported(language: string): language is Language {
    return (supportedLanguages as ReadonlyArray<string>).includes(language)
}
