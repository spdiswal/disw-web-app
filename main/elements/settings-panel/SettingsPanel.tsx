import { positionTransitionClasses, themeSwitchTransitionClasses, useWindowVerticalScrollEvent } from "+elements"
import type { Locale } from "+i18n"
import { LocalePicker, useLocale } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import { ThemePicker } from "+theme"
import clsx from "clsx"
import { useRef, useState } from "preact/hooks"
import { SettingsPanelVisibilityProvider } from "./useSettingsPanelVisibility"

type SettingsPanelProps = {
    readonly mediaTheme: Theme
    readonly themeSelection: ThemeSelection
    readonly onThemeSelected: (selectedTheme: ThemeSelection) => void
    readonly onLocaleSelected: (selectedLocale: Locale) => void
}

export function SettingsPanel({
    mediaTheme,
    themeSelection,
    onThemeSelected,
    onLocaleSelected,
}: SettingsPanelProps) {
    const locale = useLocale()
    
    const isVisibilityTogglingEnabled = useRef(false)
    const [isVisible, setVisible] = useState(true)
    
    useWindowVerticalScrollEvent((verticalScrollDelta) => {
        if (isVisibilityTogglingEnabled.current) {
            const hasScrolledUp = verticalScrollDelta < 0
            setVisible(hasScrolledUp)
        }
        
        isVisibilityTogglingEnabled.current = true
    })
    
    return (
        <SettingsPanelVisibilityProvider value={isVisible}>
            <div class="relative min-w-screen-xs">
                <label id="settings-panel-label" class="sr-only">
                    {{ da: "Indstillinger", en: "Settings" }[locale]}
                </label>
                <div
                    class={clsx(
                        "absolute right-4 z-40 delay-150 xs:fixed",
                        isVisible ? "visible top-4" : "invisible -top-24",
                        positionTransitionClasses,
                    )}
                    aria-labelledby="settings-panel-label"
                >
                    <div
                        class={clsx(
                            "flex items-center justify-end space-x-2 rounded-full bg-neutral-100/95 p-2 shadow-xl ring-1 ring-neutral-900/20 dark:bg-neutral-800/95 dark:ring-white/20 md:space-x-4 md:p-3",
                            themeSwitchTransitionClasses,
                        )}
                    >
                        <ThemePicker
                            class="w-fit"
                            mediaTheme={mediaTheme}
                            selectedTheme={themeSelection}
                            onThemeSelected={onThemeSelected}
                        />
                        <LocalePicker
                            class="w-fit md:w-44"
                            onLocaleSelected={selectLocaleWithoutTogglingVisibility}
                        />
                    </div>
                </div>
            </div>
        </SettingsPanelVisibilityProvider>
    )
    
    function selectLocaleWithoutTogglingVisibility(selectedLocale: Locale) {
        isVisibilityTogglingEnabled.current = false
        onLocaleSelected(selectedLocale)
    }
}
