import { FooterContent, HeaderContent, MainContent, name } from "+content"
import { themeSwitchTransitionClasses } from "+elements"
import type { LocaleCachePort, PreferredLocalePort } from "+i18n"
import { LocalePicker, LocaleProvider, useLocaleSelection } from "+i18n"
import type { MediaThemePort, ThemeCachePort } from "+theme"
import { ThemePicker, ThemeProvider, useThemeSelection } from "+theme"
import clsx from "clsx"
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
                <div class="relative min-w-screen-xs">
                    <div
                        class={clsx(
                            "absolute top-4 right-4 z-40 flex items-center justify-end space-x-2 rounded-full bg-neutral-100/95 p-2 shadow-xl ring-1 ring-neutral-900/20 dark:bg-neutral-800/95 dark:ring-white/20 xs:fixed md:space-x-4 md:p-3",
                            themeSwitchTransitionClasses,
                        )}
                    >
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
                    </div>
                </div>
                <HeaderContent/>
                <MainContent/>
                <FooterContent/>
            </LocaleProvider>
        </ThemeProvider>
    )
}
