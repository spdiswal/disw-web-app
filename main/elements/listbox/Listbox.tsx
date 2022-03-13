import type { ReadonlyNonEmptyArray } from "+types"
import clsx from "clsx"
import type { JSX } from "preact"
import { useRef, useState } from "preact/hooks"
import { defaultFocusOutlineClasses, defaultTransitionClasses, focusOutlineInsideClasses } from "../constants"
import { useWindowEvent } from "../useWindowEvent"
import { ListboxButtonConfigurationProvider } from "./useListboxButtonConfiguration"
import { ListboxOptionStateProvider } from "./useListboxOptionState"

type ListboxProps<Option extends string> = {
    readonly id: string
    readonly class?: string
    readonly accessibilityLabel: string
    readonly options: ReadonlyNonEmptyArray<Option>
    readonly selectedOption: Option
    readonly onOptionSelected?: (option: Option) => void
    readonly renderButton: () => JSX.Element
    readonly renderOption: (option: Option) => JSX.Element
}

export function Listbox<Option extends string>({
    id,
    class: _class,
    accessibilityLabel,
    options,
    selectedOption,
    onOptionSelected,
    renderButton,
    renderOption,
}: ListboxProps<Option>) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const popupContainerRef = useRef<HTMLDivElement>(null)
    
    const accessibilityLabelId = `${id}-listbox-label`
    const popupId = `${id}-listbox-popup`
    
    const [isPopupOpen, setPopupOpen] = useState(false)
    const [highlightedOption, setHighlightedOption] =
        useState<Option | null>(null)
    
    useWindowEvent("blur", closePopup)
    useWindowEvent("mousedown", closePopupIfOutsideListbox)
    useWindowEvent("touchstart", closePopupIfOutsideListbox)
    useWindowEvent("keydown", decideToSelectHighlightedOptionOrClosePopup)
    useWindowEvent("keydown", decideToChangeHighlightedOption)
    
    return (
        <div id={id} class={clsx(_class, "relative")}>
            <span id={accessibilityLabelId} class="hidden">
                {accessibilityLabel}
            </span>
            <ListboxButtonConfigurationProvider
                value={{
                    aria: {
                        controls: popupId,
                        expanded: isPopupOpen,
                        hasPopup: true,
                        labelledBy: accessibilityLabelId,
                    },
                    ref: buttonRef,
                    handleMouseDown: togglePopup,
                    handleKeyDown: decideToOpenPopup,
                }}
            >
                {renderButton()}
            </ListboxButtonConfigurationProvider>
            <div
                ref={popupContainerRef}
                class={clsx(
                    isPopupOpen ? "visible opacity-100" : "invisible opacity-0",
                    "absolute right-0 z-50 mt-1 max-h-56 w-48 overflow-auto rounded-2xl bg-neutral-100/80 py-2 text-base shadow-lg ring-1 ring-neutral-900/20 backdrop-blur-md focus-visible:outline-none dark:bg-neutral-800/80 dark:ring-white/20 md:text-sm",
                    defaultTransitionClasses,
                )}
            >
                <ul
                    id={popupId}
                    onMouseLeave={unhighlightAllOptions}
                    role="listbox"
                    tabIndex={-1}
                    aria-activedescendant={(highlightedOption !== null
                        ? `${id}-${highlightedOption}`
                        : undefined)}
                    aria-labelledby={accessibilityLabelId}
                >
                    {options.map((option) => {
                        const optionId = `${id}-${option}`
                        const isHighlighted = option === highlightedOption
                        const isSelected = option === selectedOption
                        
                        return (
                            <li
                                key={option}
                                id={optionId}
                                class={clsx(
                                    isHighlighted && "bg-accent-600",
                                    defaultFocusOutlineClasses,
                                    focusOutlineInsideClasses,
                                    "cursor-pointer select-none py-2 px-3",
                                    defaultTransitionClasses,
                                )}
                                role="option"
                                aria-selected={isSelected}
                                onMouseMove={() => highlightOption(option)}
                                onMouseUp={() => selectOption(option)}
                            >
                                <ListboxOptionStateProvider
                                    value={{
                                        isHighlighted,
                                        isSelected,
                                    }}
                                >
                                    {renderOption(option)}
                                </ListboxOptionStateProvider>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
    
    function closePopupIfOutsideListbox({ target }: MouseEvent | TouchEvent) {
        if (!hasOccurredInListbox(target)) {
            closePopup()
        }
    }
    
    function hasOccurredInListbox(target: EventTarget | null) {
        return target instanceof Element
            && (buttonRef.current?.contains(target)
                || popupContainerRef.current?.contains(target))
    }
    
    function decideToOpenPopup(event: KeyboardEvent) {
        if (!isPopupOpen && doesKeyOpenPopup(event.key)) {
            event.stopPropagation()
            event.preventDefault()
            
            openPopup()
        }
    }
    
    function decideToSelectHighlightedOptionOrClosePopup(event: KeyboardEvent) {
        if (isPopupOpen && doesKeyClosePopup(event.key)) {
            event.stopPropagation()
            
            if (event.key !== "Tab") {
                event.preventDefault()
            }
            
            if (highlightedOption !== null && doesKeySelectOption(event.key)) {
                selectOption(highlightedOption)
            } else {
                closePopup()
            }
        }
    }
    
    function decideToChangeHighlightedOption(event: KeyboardEvent) {
        if (isPopupOpen && doesKeyChangeHighlightedOption(event.key)) {
            event.stopPropagation()
            event.preventDefault()
            
            if (event.key === "ArrowDown") {
                highlightNextOrFirstOption()
            } else {
                highlightPreviousOrLastOption()
            }
        }
    }
    
    function selectOption(option: Option) {
        onOptionSelected?.(option)
        closePopup()
    }
    
    function togglePopup() {
        if (isPopupOpen) {
            closePopup()
        } else {
            openPopup()
        }
    }
    
    function closePopup() {
        setPopupOpen(false)
    }
    
    function openPopup() {
        highlightOption(selectedOption)
        setPopupOpen(true)
    }
    
    function highlightNextOrFirstOption() {
        const count = options.length
        const indexToHighlight = highlightedOption !== null
            ? (options.indexOf(highlightedOption) + 1) % count
            : 0
        
        highlightOption(options[indexToHighlight])
    }
    
    function highlightPreviousOrLastOption() {
        const count = options.length
        const indexToHighlight = highlightedOption !== null
            ? (options.indexOf(highlightedOption) - 1 + count) % count
            : count - 1
        
        highlightOption(options[indexToHighlight])
    }
    
    function highlightOption(option: Option) {
        setHighlightedOption(option)
    }
    
    function unhighlightAllOptions() {
        setHighlightedOption(null)
    }
}

function doesKeyOpenPopup(key: string): key is "Enter" | " " | "ArrowDown" | "ArrowUp" {
    return key === "Enter"
        || key === " " /* Space */
        || key === "ArrowDown"
        || key === "ArrowUp"
}

function doesKeyClosePopup(key: string): key is "Enter" | " " | "Escape" | "Tab" {
    return key === "Enter"
        || key === " " /* Space */
        || key === "Escape"
        || key === "Tab"
}

function doesKeySelectOption(key: string): key is "Enter" | " " {
    return key === "Enter"
        || key === " " /* Space */
}

function doesKeyChangeHighlightedOption(key: string): key is "ArrowDown" | "ArrowUp" {
    return key === "ArrowDown"
        || key === "ArrowUp"
}
