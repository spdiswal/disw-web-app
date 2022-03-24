import { themeSwitchTransitionClasses, useWindowEvent } from "+elements"
import type { Locale } from "+i18n"
import { LocalePicker, useLocale } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import { ThemePicker } from "+theme"
import clsx from "clsx"
import { useRef, useState } from "preact/hooks"

type SettingsPanelProps = {
    readonly mediaTheme: Theme
    readonly themeSelection: ThemeSelection
    readonly onThemeSelected: (selectedTheme: ThemeSelection) => void
    readonly onLocaleSelected: (selectedLocale: Locale) => void
}

const decisiveScrollDistance = 16

export function SettingsPanel({
    mediaTheme,
    themeSelection,
    onThemeSelected,
    onLocaleSelected,
}: SettingsPanelProps) {
    const locale = useLocale()
    
    const lastScrollY = useRef(-1)
    const [visible, setVisible] = useState(true)
    
    useWindowEvent("scroll", () => {
        const isRecentlyReset = lastScrollY.current === -1
        const isPullingToRefreshPage = window.scrollY < 0
        
        const scrollDelta = window.scrollY - lastScrollY.current
        lastScrollY.current = window.scrollY
        
        if (isPullingToRefreshPage || isRecentlyReset) {
            return
        }
        
        const hasScrolledUpConsiderably = scrollDelta < -decisiveScrollDistance
        const hasScrolledDownConsiderably = scrollDelta > decisiveScrollDistance
        
        if (hasScrolledUpConsiderably) {
            setVisible(true)
        } else if (hasScrolledDownConsiderably) {
            setVisible(false)
        }
    })
    
    return (
        <div class="relative min-w-screen-xs">
            <label id="settings-panel-label" class="sr-only">
                {{ da: "Indstillinger", en: "Settings" }[locale]}
            </label>
            <div
                class={clsx(
                    "absolute right-4 z-40 flex items-center justify-end space-x-2 rounded-full bg-neutral-100/95 p-2 shadow-xl ring-1 ring-neutral-900/20 dark:bg-neutral-800/95 dark:ring-white/20 xs:fixed md:space-x-4 md:p-3",
                    visible ? "top-4" : "-top-24",
                    themeSwitchTransitionClasses,
                )}
                aria-labelledby="settings-panel-label"
            >
                <ThemePicker
                    class="w-fit"
                    mediaTheme={mediaTheme}
                    selectedTheme={themeSelection}
                    onThemeSelected={onThemeSelected}
                />
                <LocalePicker
                    class="w-fit md:w-44"
                    onLocaleSelected={selectLocaleWithoutTogglingSettingsPanel}
                />
            </div>
        </div>
    )
    
    function selectLocaleWithoutTogglingSettingsPanel(selectedLocale: Locale) {
        lastScrollY.current = -1
        onLocaleSelected(selectedLocale)
    }
}
