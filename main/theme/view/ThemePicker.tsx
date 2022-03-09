import { HeroIconDesktopComputer, HeroIconMoon, HeroIconSun, LinearListboxOption, Listbox, TransparentButton } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import type { ReadonlyNonEmptyArray } from "+types"
import type { JSX } from "preact"

const options: ReadonlyNonEmptyArray<ThemeSelection> = [
    "match-media",
    "light",
    "dark",
]

const caption: Readonly<Record<ThemeSelection, Localisable<string>>> = {
    "dark": { da: "Mørkt", en: "Dark" },
    "light": { da: "Lyst", en: "Light" },
    "match-media": { da: "Automatisk", en: "Automatic" },
}

const highlightedIcon: Readonly<Record<Theme, JSX.Element>> = {
    dark: <HeroIconMoon class="h-5 w-5 shrink-0 rounded-full text-primary-500"/>,
    light: <HeroIconSun class="h-5 w-5 shrink-0 rounded-full text-primary-500"/>,
}

const icon: Readonly<Record<ThemeSelection, JSX.Element>> = {
    "dark": <HeroIconMoon class="h-5 w-5 shrink-0 rounded-full"/>,
    "light": <HeroIconSun class="h-5 w-5 shrink-0 rounded-full"/>,
    "match-media": <HeroIconDesktopComputer class="h-5 w-5 shrink-0 rounded-full"/>,
}

const accessibilityLabel: Localisable<string> = {
    da: "Skift visuelt tema",
    en: "Change visual theme",
}

type ThemePickerProps = {
    readonly class?: string
    readonly mediaTheme: Theme
    readonly selectedTheme: ThemeSelection
    readonly onThemeSelected?: (selectedTheme: ThemeSelection) => void
}

export function ThemePicker({
    class: _class,
    mediaTheme,
    selectedTheme,
    onThemeSelected,
}: ThemePickerProps) {
    const locale = useLocale()
    
    return (
        <Listbox
            class={_class}
            options={options}
            selectedOption={selectedTheme}
            onOptionSelected={onThemeSelected}
            renderButton={() => (
                <TransparentButton>
                    <span class="sr-only">
                        {accessibilityLabel[locale]}
                    </span>
                    {selectedTheme === "match-media"
                        ? icon[mediaTheme]
                        : highlightedIcon[selectedTheme]}
                </TransparentButton>
            )}
            renderOption={(themeSelection) => (
                <LinearListboxOption>
                    {icon[themeSelection]}
                    <span class="mx-4 block grow truncate">
                        {caption[themeSelection][locale]}
                    </span>
                </LinearListboxOption>
            )}
        />
    )
}
