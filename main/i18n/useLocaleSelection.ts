import type { Locale, LocaleCachePort, PreferredLocalePort } from "+i18n"
import { useCallback, useEffect, useState } from "preact/hooks"

export type UseLocaleProps = {
    readonly localeCachePort: LocaleCachePort
    readonly preferredLocalePort: PreferredLocalePort
}

export function useLocaleSelection({
    localeCachePort: { restoredLocaleSelection, saveLocaleSelection },
    preferredLocalePort: { preferredLocale },
}: UseLocaleProps) {
    const initialLocale = restoredLocaleSelection === "match-preferred"
        ? preferredLocale
        : restoredLocaleSelection
    
    const [locale, setLocale] = useState(initialLocale)
    
    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])
    
    const selectLocale =
        useCallback((localeToSelect: Locale) => {
            saveLocaleSelection(localeToSelect)
            setLocale(localeToSelect)
        }, [])
    
    return {
        locale,
        selectLocale,
    }
}
