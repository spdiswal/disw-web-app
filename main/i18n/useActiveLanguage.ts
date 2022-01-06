import type { Language } from "+i18n"
import type { StateUpdater } from "preact/hooks"
import { useEffect, useState } from "preact/hooks"

export type UseActiveLanguageOptions = {
    readonly initialLanguage: Language
}

export type UseActiveLanguageHook = {
    readonly activeLanguage: Language
    readonly setActiveLanguage: StateUpdater<Language>
}

export function useActiveLanguage({
    initialLanguage,
}: UseActiveLanguageOptions): UseActiveLanguageHook {
    const [activeLanguage, setActiveLanguage] = useState(initialLanguage)
    
    useEffect(() => {
        document.documentElement.lang = activeLanguage
    }, [activeLanguage])
    
    return {
        activeLanguage,
        setActiveLanguage,
    }
}
