import type { ClassValue } from "clsx"
import clsx from "clsx"

type HeroIconCheckProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `check`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconCheck({
    class: _class,
}: HeroIconCheckProps) {
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
                d="M5 13l4 4L19 7"
            />
        </svg>
    )
}
