import type { LocaleCachePort, PreferredLocalePort } from "+i18n"
import { LocalePicker, LocaleProvider, useLocaleSelection } from "+i18n"
import { FooterContent, MainContent, name } from "+content"
import type { MediaThemePort, ThemeCachePort } from "+theme"
import { ThemePicker, useTheme } from "+theme"
import { useEffect } from "preact/hooks"

type AppProps = {
    readonly localeCachePort: LocaleCachePort
    readonly mediaThemePort: MediaThemePort
    readonly preferredLocalePort: PreferredLocalePort
    readonly themeCachePort: ThemeCachePort
}

export function App({
    localeCachePort,
    mediaThemePort,
    preferredLocalePort,
    themeCachePort,
}: AppProps) {
    useEffect(() => {
        document.title = name
    }, [])
    
    const { mediaTheme, themeSelection, selectTheme } = useTheme({
        mediaThemePort,
        themeCachePort,
    })
    
    const { locale, selectLocale } = useLocaleSelection({
        localeCachePort,
        preferredLocalePort,
    })
    
    return (
        <LocaleProvider value={locale}>
            <header class="flex absolute top-4 right-4 justify-end items-center md:gap-x-2">
                <ThemePicker
                    class="w-fit"
                    mediaTheme={mediaTheme}
                    selectedTheme={themeSelection}
                    onThemeSelected={selectTheme}
                />
                <LocalePicker
                    class="w-fit md:w-48"
                    onLocaleSelected={selectLocale}
                />
            </header>
            <MainContent/>
            <FooterContent/>
        </LocaleProvider>
    )
}
