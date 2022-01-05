import type { ClassList } from "+types"

type HeroIconSelectorProps = {
    readonly class?: ClassList
}

/**
 * Heroicons: `selector`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconSelector({ class: _class }: HeroIconSelectorProps) {
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
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
        </svg>
    )
}
