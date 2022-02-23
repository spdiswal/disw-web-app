import clsx from "clsx"
import type { ClassValue } from "clsx"

type HeroIconChevronDownProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `chevron-down`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconChevronDown(props: HeroIconChevronDownProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={clsx(props.class, "aspect-square")}
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    )
}
