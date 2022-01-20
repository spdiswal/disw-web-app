import { FlagIconDenmark, FlagIconUnitedKingdom } from "+elements/icons"
import { Listbox } from "+elements/listbox"
import type { Language, Multilingual } from "+i18n"
import { supportedLanguages } from "+i18n"
import type { ClassValue } from "clsx"
import type { JSX } from "preact"
import { Fragment } from "preact"

const caption: Multilingual<string> = { da: "Dansk", en: "English" }

const flagIcon: Multilingual<JSX.Element> = {
    da: <FlagIconDenmark class="shrink-0 h-5 rounded-full"/>,
    en: <FlagIconUnitedKingdom class="shrink-0 h-5 rounded-full"/>,
}

type LanguagePickerProps = {
    readonly selection: Language
    readonly onLanguageSelected?: (language: Language) => void
    readonly class?: ClassValue
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
                        <span class="block ml-3 truncate">
                            {caption[language]}
                        </span>
                    </Fragment>
                ),
            })}
        </Listbox>
    )
}
