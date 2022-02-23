import type { ClassValue } from "clsx"
import clsx from "clsx"

type HeroIconPlusProps = {
    readonly class?: ClassValue
}

/**
 * Heroicons: `plus`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconPlus(props: HeroIconPlusProps) {
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
                d="M12 4v16m8-8H4"
            />
        </svg>
    )
}
