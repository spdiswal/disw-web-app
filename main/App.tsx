import { SplitContainer } from "+elements"
import type { PreferredLanguagePort } from "+i18n"
import { LanguagePicker, useActiveLanguage } from "+i18n"
import { ProfilePage } from "+profile"
import { content } from "+profile/content/predefined"
import type { MediaThemePort, ThemeStoragePort } from "+theme"
import { ThemePicker, useTheme } from "+theme"
import { Fragment } from "preact"
import { useEffect } from "preact/hooks"

const copyright = {
    year: new Date().getFullYear(),
    owner: content.identity.name,
}

type AppProps = {
    readonly preferredLanguagePort: PreferredLanguagePort
    readonly mediaThemePort: MediaThemePort
    readonly themeStoragePort: ThemeStoragePort
}

export function App({
    preferredLanguagePort: { preferredLanguage },
    mediaThemePort,
    themeStoragePort,
}: AppProps) {
    useEffect(() => {
        document.title = content.identity.name
    }, [])
    
    const { mediaTheme, themeSelection, selectTheme } = useTheme({
        mediaThemePort,
        themeStoragePort,
    })
    
    const { activeLanguage, setActiveLanguage } = useActiveLanguage({
        initialLanguage: preferredLanguage,
    })
    
    return (
        <Fragment>
            <header class="flex absolute top-4 right-4 justify-end items-center md:gap-x-2">
                <ThemePicker
                    class="w-fit"
                    activeLanguage={activeLanguage}
                    mediaTheme={mediaTheme}
                    selectedTheme={themeSelection}
                    onThemeSelected={selectTheme}
                />
                <LanguagePicker
                    class="w-fit md:w-48"
                    selectedLanguage={activeLanguage}
                    onLanguageSelected={setActiveLanguage}
                />
            </header>
            <ProfilePage
                content={content}
                activeLanguage={activeLanguage}
            />
            <footer class="p-8 bg-neutral-200 dark:bg-neutral-900 md:py-16">
                <SplitContainer class="font-light text-neutral-600 dark:text-neutral-300">
                    &copy; {copyright.year} {copyright.owner}
                </SplitContainer>
            </footer>
        </Fragment>
    )
}
