import { FlagIconDenmark, FlagIconUnitedKingdom } from "+elements/icons"
import { Listbox } from "+elements/listbox"
import type { Language } from "+i18n"
import { languages, multilingual } from "+i18n"
import { Fragment } from "preact"

const caption = multilingual({
    da: "Dansk",
    en: "English",
})

const flagIcon = multilingual({
    da: <FlagIconDenmark class="flex-shrink-0 h-5 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="flex-shrink-0 h-5 rounded-full"/>,
})

type LanguagePickerProps = Readonly<{
    selection: Language
    onLanguageSelected?: (language: Language) => void
    class?: string
}>

export function LanguagePicker({
    class: _class,
    selection,
    onLanguageSelected,
}: LanguagePickerProps) {
    return (
        <Listbox
            class={_class}
            options={languages}
            selection={selection}
            onChange={onLanguageSelected}
        >
            {(language) => ({
                key: language,
                element: (
                    <Fragment>
                        {flagIcon.resolveFor(language)}
                        <span class="ml-3 block truncate">
                            {caption.resolveFor(language)}
                        </span>
                    </Fragment>
                ),
            })}
        </Listbox>
    )
}
