import type { ClassValue } from "clsx"
import clsx from "clsx"

type HeroIconDesktopComputerProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `desktop-computer`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconDesktopComputer({
    class: _class,
}: HeroIconDesktopComputerProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={clsx("aspect-square", _class)}
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    )
}
