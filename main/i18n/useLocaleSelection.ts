import type { Locale, LocaleCachePort, PreferredLocalePort } from "+i18n"
import { defaultLocale } from "+i18n"
import { createContext } from "preact"
import { useCallback, useContext, useEffect, useState } from "preact/hooks"

export type UseLocaleProps = {
    readonly localeCachePort: LocaleCachePort
    readonly preferredLocalePort: PreferredLocalePort
}

const LocaleContext = createContext<Locale>(defaultLocale)
export const LocaleProvider = LocaleContext.Provider

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
    
    const selectLocale = useCallback((localeToSelect: Locale) => {
        saveLocaleSelection(localeToSelect)
        setLocale(localeToSelect)
    }, [])
    
    return {
        locale,
        selectLocale,
    }
}

export function useLocale(): Locale {
    return useContext(LocaleContext)
}
