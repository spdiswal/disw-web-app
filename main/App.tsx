import { GlyphIconGitHub } from "+elements"
import type { LocaleCachePort, PreferredLocalePort } from "+i18n"
import { LocalePicker, useLocale } from "+i18n"
import { ProfilePage } from "+profile"
import { content } from "+profile/content"
import type { MediaThemePort, ThemeCachePort } from "+theme"
import { ThemePicker, useTheme } from "+theme"
import { Fragment } from "preact"
import { useEffect } from "preact/hooks"

const copyright = {
    year: new Date().getFullYear(),
    owner: content.identity.name,
}

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
        document.title = content.identity.name
    }, [])
    
    const { mediaTheme, themeSelection, selectTheme } = useTheme({
        mediaThemePort,
        themeCachePort,
    })
    
    const { locale, selectLocale } = useLocale({
        localeCachePort,
        preferredLocalePort,
    })
    
    return (
        <Fragment>
            <header class="flex absolute top-4 right-4 justify-end items-center md:gap-x-2">
                <ThemePicker
                    class="w-fit"
                    locale={locale}
                    mediaTheme={mediaTheme}
                    selectedTheme={themeSelection}
                    onThemeSelected={selectTheme}
                />
                <LocalePicker
                    class="w-fit md:w-48"
                    selectedLocale={locale}
                    onLocaleSelected={selectLocale}
                />
            </header>
            <ProfilePage
                content={content}
                locale={locale}
            />
            <footer class="p-8 bg-neutral-200 dark:bg-neutral-900 md:py-16">
                <div class="flex flex-col gap-y-2 items-center md:gap-y-4">
                    <div class="flex gap-x-2 justify-center text-neutral-500 dark:text-neutral-400">
                        <a href={content.socialLinks.githubUrl}>
                            <span class="sr-only">GitHub</span>
                            <GlyphIconGitHub class="h-8 hover:text-neutral-700 dark:hover:text-neutral-200" aria-hidden="true"/>
                        </a>
                    </div>
                    <span class="font-light text-neutral-600 dark:text-neutral-300">
                        &copy; {copyright.year} {copyright.owner}
                    </span>
                </div>
            </footer>
        </Fragment>
    )
}
