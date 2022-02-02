import type { Language } from "+i18n"
import { supportedLanguages } from "+i18n"

const fallbackLanguage: Language = "da"
const supportedLanguagePrefixes = supportedLanguages as ReadonlyArray<string>

export type PreferredLanguagePort = {
    readonly preferredLanguage: Language
}

export function adaptPreferredLanguageToNavigator(): PreferredLanguagePort {
    return {
        preferredLanguage: navigator.languages.map(toPrefix).find(isSupported)
            ?? fallbackLanguage,
    }
    
    function toPrefix(languageCode: string): string {
        return languageCode.split("-", 1)[0].toLowerCase()
    }
    
    function isSupported(languagePrefix: string): languagePrefix is Language {
        return supportedLanguagePrefixes.includes(languagePrefix)
    }
}

export function dummyPreferredLanguage(): PreferredLanguagePort {
    return {
        preferredLanguage: fallbackLanguage,
    }
}
