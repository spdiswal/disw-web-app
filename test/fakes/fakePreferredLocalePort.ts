import type { Locale, PreferredLocalePort } from "+i18n"

export function fakePreferredLocalePort(
    preferredLocale: Locale,
): PreferredLocalePort {
    return {
        preferredLocale,
    }
}
