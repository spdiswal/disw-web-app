import type { StateUpdater } from "preact/hooks"
import { useEffect, useState } from "preact/hooks"
import type { Language } from "./models"

export type UseActiveLanguageHook = {
    readonly activeLanguage: Language
    readonly setActiveLanguage: StateUpdater<Language>
}

export function useActiveLanguage(
    preferredLanguage: Language,
): UseActiveLanguageHook {
    const [activeLanguage, setActiveLanguage] =
        useState<Language>(preferredLanguage)
    
    useEffect(() => {
        document.documentElement.lang = activeLanguage
    }, [activeLanguage])
    
    return {
        activeLanguage,
        setActiveLanguage,
    }
}
