import { HeroIconCheck, HeroIconDesktopComputer, HeroIconMoon, HeroIconSun, Listbox, ListboxIconButton, ListboxOption } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { Theme, ThemeSelection } from "+theme"
import type { ClassValue } from "clsx"
import type { JSX } from "preact"

const options: ReadonlyArray<ThemeSelection> = [
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
    dark: <HeroIconMoon class="shrink-0 h-5 text-primary-600 rounded-full"/>,
    light: <HeroIconSun class="shrink-0 h-5 text-primary-600 rounded-full"/>,
}

const icon: Readonly<Record<ThemeSelection, JSX.Element>> = {
    "dark": <HeroIconMoon class="shrink-0 h-5 rounded-full"/>,
    "light": <HeroIconSun class="shrink-0 h-5 rounded-full"/>,
    "match-media": <HeroIconDesktopComputer class="shrink-0 h-5 rounded-full"/>,
}

const accessibilityLabel: Localisable<string> = {
    da: "Skift visuelt tema",
    en: "Change visual theme",
}

type ThemePickerProps = {
    readonly class?: ClassValue
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
            renderButton={(state) => (
                <ListboxIconButton state={state}>
                    <span class="sr-only">
                        {accessibilityLabel[locale]}
                    </span>
                    {selectedTheme === "match-media"
                        ? icon[mediaTheme]
                        : highlightedIcon[selectedTheme]}
                </ListboxIconButton>
            )}
            renderOption={(themeSelection, { isSelected }) => (
                <ListboxOption class="flex gap-x-4 items-center">
                    {icon[themeSelection]}
                    <span class="block grow truncate">
                        {caption[themeSelection][locale]}
                    </span>
                    {isSelected
                        ? <HeroIconCheck class="h-5 text-accent-600 group-hover:text-white"/>
                        : null}
                </ListboxOption>
            )}
        />
    )
}
