import { FooterContent, HeaderContent, MainContent, name } from "+content"
import { SettingsPanel } from "+elements"
import type { LocaleCachePort, PreferredLocalePort } from "+i18n"
import { LocaleProvider, useLocaleSelection } from "+i18n"
import type { MediaThemePort, ThemeCachePort } from "+theme"
import { ThemeProvider, useThemeSelection } from "+theme"
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
    
    const { appliedTheme, mediaTheme, themeSelection, selectTheme } =
        useThemeSelection({ mediaThemePort, themeCachePort })
    
    const { locale, selectLocale } = useLocaleSelection({
        localeCachePort,
        preferredLocalePort,
    })
    
    return (
        <ThemeProvider value={appliedTheme}>
            <LocaleProvider value={locale}>
                <SettingsPanel
                    mediaTheme={mediaTheme}
                    themeSelection={themeSelection}
                    onThemeSelected={selectTheme}
                    onLocaleSelected={selectLocale}
                />
                <HeaderContent/>
                <MainContent/>
                <FooterContent/>
            </LocaleProvider>
        </ThemeProvider>
    )
}
