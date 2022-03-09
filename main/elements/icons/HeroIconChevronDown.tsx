type HeroIconChevronDownProps = {
    readonly class?: string
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
                d="M19 9l-7 7-7-7"
            />
        </svg>
    )
}
