import { FlagIconDenmark, FlagIconUnitedKingdom, HeroIconCheck, HeroIconSelector, HybridButton, Listbox, ListboxOption } from "+elements"
import type { Locale } from "+i18n"
import { useLocale } from "+i18n"
import type { ClassValue } from "clsx"
import type { JSX } from "preact"

const options: ReadonlyArray<Locale> = ["da", "en"]

const caption: Readonly<Record<Locale, string>> = {
    da: "Dansk",
    en: "English",
}

const icon: Readonly<Record<Locale, JSX.Element>> = {
    da: <FlagIconDenmark class="h-5 shrink-0 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="h-5 shrink-0 rounded-full"/>,
}

type LocalePickerProps = {
    readonly class?: ClassValue
    readonly onLocaleSelected?: (locale: Locale) => void
}

export function LocalePicker({
    class: _class,
    onLocaleSelected,
}: LocalePickerProps) {
    const selectedLocale = useLocale()
    
    return (
        <Listbox
            class={_class}
            options={options}
            selectedOption={selectedLocale}
            onOptionSelected={onLocaleSelected}
            renderButton={({ ref, onMouseDown }, { isExpanded }) => (
                <HybridButton
                    forwardRef={ref}
                    forwardAriaExpanded={isExpanded}
                    class="flex items-center gap-x-4 md:w-full md:text-sm"
                    onMouseDown={onMouseDown}
                >
                    {icon[selectedLocale]}
                    <span class="hidden text-left md:block md:grow md:truncate">
                        {caption[selectedLocale]}
                    </span>
                    <HeroIconSelector class="hidden h-5 md:block"/>
                </HybridButton>
            )}
            renderOption={(locale, { isSelected }) => (
                <ListboxOption class="flex items-center gap-x-4">
                    {icon[locale]}
                    <span class="block grow truncate">
                        {caption[locale]}
                    </span>
                    {isSelected
                        ? <HeroIconCheck class="h-5 text-accent-600 group-hover:text-white"/>
                        : null}
                </ListboxOption>
            )}
        />
    )
}
