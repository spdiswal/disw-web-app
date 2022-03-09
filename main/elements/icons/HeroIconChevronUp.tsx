type HeroIconChevronUpProps = {
    readonly class?: string
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
            class={props.class}
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
            />
        </svg>
    )
}
