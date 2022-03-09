import { FlagIconDenmark, FlagIconUnitedKingdom, HeroIconSelector, HybridButton, LinearListboxOption, Listbox } from "+elements"
import type { Locale } from "+i18n"
import { useLocale } from "+i18n"
import type { ReadonlyNonEmptyArray } from "+types"
import type { JSX } from "preact"

const options: ReadonlyNonEmptyArray<Locale> = ["da", "en"]

const caption: Readonly<Record<Locale, string>> = {
    da: "Dansk",
    en: "English",
}

const icon: Readonly<Record<Locale, JSX.Element>> = {
    da: <FlagIconDenmark class="h-5 w-5 shrink-0 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="h-5 w-5 shrink-0 rounded-full"/>,
}

type LocalePickerProps = {
    readonly class?: string
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
            renderButton={() => (
                <HybridButton class="flex items-center md:w-full md:text-sm">
                    {icon[selectedLocale]}
                    <span class="mx-4 hidden text-left md:block md:grow md:truncate">
                        {caption[selectedLocale]}
                    </span>
                    <HeroIconSelector class="hidden h-5 w-5 md:block"/>
                </HybridButton>
            )}
            renderOption={(locale) => (
                <LinearListboxOption>
                    {icon[locale]}
                    <span class="mx-4 block grow truncate">
                        {caption[locale]}
                    </span>
                </LinearListboxOption>
            )}
        />
    )
}
