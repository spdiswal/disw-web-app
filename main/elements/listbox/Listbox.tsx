import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { JSX } from "preact"
import type { Ref } from "preact/hooks"
import { useRef, useState } from "preact/hooks"
import { useWindowEvent } from "../useWindowEvent"

type ListboxProps<Option extends string> = {
    readonly class?: ClassValue
    readonly options: ReadonlyArray<Option>
    readonly selectedOption: Option
    readonly onOptionSelected?: (option: Option) => void
    readonly renderButton: (
        configuration: ListboxButtonConfiguration,
        state: ListboxButtonState,
    ) => JSX.Element
    readonly renderOption: (
        option: Option,
        state: ListboxOptionState,
    ) => JSX.Element
}

export type ListboxButtonConfiguration = {
    readonly ref: Ref<HTMLButtonElement>
    readonly onMouseDown: () => void
}

export type ListboxButtonState = {
    readonly isExpanded: boolean
}

export type ListboxOptionState = {
    readonly isSelected: boolean
}

export function Listbox<Option extends string>({
    class: _class,
    options,
    selectedOption,
    onOptionSelected,
    renderButton,
    renderOption,
}: ListboxProps<Option>) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const popupRef = useRef<HTMLUListElement>(null)
    const [isPopupOpen, setPopupOpen] = useState(false)
    
    useWindowEvent("blur", closePopup)
    useWindowEvent("mousedown", ({ target }) => {
        const occurredInListbox = target instanceof Element
            && (buttonRef.current?.contains(target)
                || popupRef.current?.contains(target))
        
        if (!occurredInListbox) {
            closePopup()
        }
    })
    
    return (
        <div class={clsx(_class, "relative")}>
            {renderButton(
                { ref: buttonRef, onMouseDown: togglePopup },
                { isExpanded: isPopupOpen },
            )}
            <ul
                ref={popupRef}
                class={clsx(
                    !isPopupOpen && "hidden",
                    "absolute right-0 z-50 mt-1 max-h-56 w-48 overflow-auto rounded-xl bg-white/75 py-1 text-base shadow-lg ring-1 ring-neutral-900/10 backdrop-blur-md focus-visible:outline-none dark:bg-neutral-100/75 md:text-sm",
                )}
                role="listbox"
            >
                {options.map((option) => {
                    const isSelected = option === selectedOption
                    return (
                        <li
                            key={option}
                            class={clsx(
                                isSelected ? "font-bold" : "font-normal",
                                "group relative cursor-default select-none py-2 px-3 hover:bg-accent-600",
                            )}
                            role="option"
                            aria-selected={isSelected}
                            onMouseUp={() => {
                                onOptionSelected?.(option)
                                closePopup()
                            }}
                        >
                            {renderOption(option, { isSelected })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    
    function closePopup() {
        setPopupOpen(false)
    }
    
    function togglePopup() {
        setPopupOpen(!isPopupOpen)
    }
}
