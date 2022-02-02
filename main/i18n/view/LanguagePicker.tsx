import { FlagIconDenmark, FlagIconUnitedKingdom, HeroIconCheck, HeroIconSelector, Listbox, ListboxOption, ListboxResponsiveButton } from "+elements"
import type { Language } from "+i18n"
import { supportedLanguages } from "+i18n"
import type { ClassValue } from "clsx"
import type { JSX } from "preact"

const caption: Readonly<Record<Language, string>> = {
    da: "Dansk",
    en: "English",
}

const icon: Readonly<Record<Language, JSX.Element>> = {
    da: <FlagIconDenmark class="shrink-0 h-5 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="shrink-0 h-5 rounded-full"/>,
}

type LanguagePickerProps = {
    readonly class?: ClassValue
    
    readonly selectedLanguage: Language
    readonly onLanguageSelected?: (language: Language) => void
}

export function LanguagePicker({
    class: _class,
    selectedLanguage,
    onLanguageSelected,
}: LanguagePickerProps) {
    return (
        <Listbox
            class={_class}
            options={supportedLanguages}
            selectedOption={selectedLanguage}
            onOptionSelected={onLanguageSelected}
            renderButton={(state) => (
                <ListboxResponsiveButton
                    class="flex gap-x-4 items-center md:w-full"
                    state={state}
                >
                    {icon[selectedLanguage]}
                    <span class="hidden md:block md:grow md:truncate">
                        {caption[selectedLanguage]}
                    </span>
                    <HeroIconSelector class="hidden h-5 md:block"/>
                </ListboxResponsiveButton>
            )}
            renderOption={(option, { isSelected }) => (
                <ListboxOption class="flex gap-x-4 items-center">
                    {icon[option]}
                    <span class="block grow truncate">
                        {caption[option]}
                    </span>
                    {isSelected
                        ? <HeroIconCheck class="h-5 text-accent-600 group-hover:text-white"/>
                        : null}
                </ListboxOption>
            )}
        />
    )
}
