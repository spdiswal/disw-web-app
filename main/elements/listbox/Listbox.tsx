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
    
    readonly renderButton: (state: ListboxButtonState) => JSX.Element
    readonly renderOption: (
        option: Option,
        state: ListboxOptionState,
    ) => JSX.Element
}

export type ListboxButtonState = {
    readonly ref: Ref<HTMLButtonElement>
    readonly isExpanded: boolean
    readonly onMouseDown: () => void
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
    
    useWindowEvent("blur", () => setPopupOpen(false))
    useWindowEvent("mousedown", ({ target }) => {
        const occurredInListbox = target instanceof Element
            && (buttonRef.current?.contains(target)
                || popupRef.current?.contains(target))
        
        if (!occurredInListbox) {
            setPopupOpen(false)
        }
    })
    
    return (
        <div class={clsx("relative", _class)}>
            {renderButton({
                ref: buttonRef,
                isExpanded: isPopupOpen,
                onMouseDown: () => setPopupOpen(!isPopupOpen),
            })}
            <ul
                ref={popupRef}
                class={clsx(
                    !isPopupOpen && "hidden",
                    "overflow-auto absolute right-0 z-50 py-1 mt-1 w-48 max-h-56 text-base bg-white/75 dark:bg-neutral-100/75 rounded-md focus-visible:outline-none ring-1 ring-neutral-900/10 shadow-lg backdrop-blur-md md:text-sm",
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
                                "group relative py-2 px-3 hover:bg-accent-600 cursor-default select-none",
                            )}
                            role="option"
                            aria-selected={isSelected}
                            onMouseUp={() => {
                                onOptionSelected?.(option)
                                setPopupOpen(false)
                            }}
                        >
                            {renderOption(option, { isSelected })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
