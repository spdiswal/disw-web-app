import type { Locale } from "+i18n"

const defaultLocale: Locale = "da"

export type PreferredLocalePort = {
    readonly preferredLocale: Locale
}

export function adaptPreferredLocalePortToNavigatorLanguages(): PreferredLocalePort {
    const preferredLocale = navigator.languages.map(toPrefix).find(isSupported)
    
    return {
        preferredLocale: preferredLocale ?? defaultLocale,
    }
    
    function toPrefix(languageCode: string): string {
        return languageCode.split("-", 1)[0].toLowerCase()
    }
    
    function isSupported(languagePrefix: string): languagePrefix is Locale {
        return languagePrefix === "da" || languagePrefix === "en"
    }
}

export function dummyPreferredLocalePort(): PreferredLocalePort {
    return {
        preferredLocale: defaultLocale,
    }
}
