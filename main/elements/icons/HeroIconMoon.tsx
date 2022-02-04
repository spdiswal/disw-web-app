import type { ClassValue } from "clsx"
import clsx from "clsx"

type HeroIconMoonProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `moon`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconMoon({
    class: _class,
}: HeroIconMoonProps) {
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    )
}