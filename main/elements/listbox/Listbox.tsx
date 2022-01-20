import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { useRef, useState } from "preact/hooks"
import { ListboxButton } from "./ListboxButton"
import { ListboxOption } from "./ListboxOption"
import { ListboxPopup } from "./ListboxPopup"
import { useMouseDownOutsideElementEvent } from "./useMouseDownOutsideElementEvent"
import { useWindowEvent } from "./useWindowEvent"

type ListboxProps<Option> = {
    readonly options: ReadonlyArray<Option>
    readonly selection: Option
    readonly onChange?: (selection: Option) => void
    readonly children: (optionToRender: Option) => {
        readonly element: ComponentChildren
        readonly key: string
    }
    readonly class?: ClassValue
}

export function Listbox<Option>({
    options,
    selection,
    onChange,
    children: render,
    class: _class,
}: ListboxProps<Option>) {
    const listboxRef = useRef<HTMLDivElement>(null)
    const [isOpen, setOpen] = useState(false)
    
    const closePopup = () => setOpen(false)
    const togglePopup = () => setOpen(!isOpen)
    
    useWindowEvent("blur", closePopup)
    useMouseDownOutsideElementEvent(listboxRef, closePopup)
    
    return (
        <div ref={listboxRef} class={clsx(_class)}>
            <ListboxButton isOpen={isOpen} onClick={togglePopup}>
                {render(selection).element}
            </ListboxButton>
            <ListboxPopup isOpen={isOpen}>
                {options.map((optionToRender) => {
                    const { element, key } = render(optionToRender)
                    
                    const handleOptionClick = () => {
                        closePopup()
                        onChange?.(optionToRender)
                    }
                    
                    return (
                        <ListboxOption
                            key={key}
                            isSelected={optionToRender === selection}
                            onClick={handleOptionClick}
                        >
                            {element}
                        </ListboxOption>
                    )
                })}
            </ListboxPopup>
        </div>
    )
}
