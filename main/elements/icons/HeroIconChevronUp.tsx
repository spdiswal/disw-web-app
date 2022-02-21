import type { ClassValue } from "clsx"
import clsx from "clsx"

type HeroIconChevronUpProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `chevron-up`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconChevronUp(props: HeroIconChevronUpProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={clsx(props.class, "aspect-square")}
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
            />
        </svg>
    )
}
