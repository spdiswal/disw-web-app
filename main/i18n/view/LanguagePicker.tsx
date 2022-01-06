import { FlagIconDenmark, FlagIconUnitedKingdom } from "+elements/icons"
import { Listbox } from "+elements/listbox"
import type { Language, Multilingual } from "+i18n"
import { supportedLanguages } from "+i18n"
import type { ClassList } from "+types"
import type { JSX } from "preact"
import { Fragment } from "preact"

const caption: Multilingual<string> = {
    da: "Dansk",
    en: "English",
}

const flagIcon: Multilingual<JSX.Element> = {
    da: <FlagIconDenmark class="flex-shrink-0 h-5 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="flex-shrink-0 h-5 rounded-full"/>,
}

type LanguagePickerProps = {
    readonly selection: Language
    readonly onLanguageSelected?: (language: Language) => void
    readonly class?: ClassList
}

export function LanguagePicker({
    class: _class,
    selection,
    onLanguageSelected,
}: LanguagePickerProps) {
    return (
        <Listbox
            class={_class}
            options={supportedLanguages}
            selection={selection}
            onChange={onLanguageSelected}
        >
            {(language) => ({
                key: language,
                element: (
                    <Fragment>
                        {flagIcon[language]}
                        <span class="ml-3 block truncate">
                            {caption[language]}
                        </span>
                    </Fragment>
                ),
            })}
        </Listbox>
    )
}
