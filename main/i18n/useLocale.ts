import type { Locale } from "+i18n"
import { defaultLocale } from "+i18n"
import { createContext } from "preact"
import { useContext } from "preact/hooks"

const LocaleContext = createContext<Locale>(defaultLocale)

export const LocaleProvider = LocaleContext.Provider

export function useLocale(): Locale {
    return useContext(LocaleContext)
}
