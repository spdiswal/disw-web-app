import type { ClassList } from "+types"

type HeroIconCheckProps = {
    readonly class?: ClassList
}

/**
 * Heroicons: `check`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconCheck({ class: _class }: HeroIconCheckProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`aspect-square ${_class ?? ""}`}
            fill="none"
            viewBox="0 0 24 24"
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
