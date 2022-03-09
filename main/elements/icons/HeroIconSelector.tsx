type HeroIconSelectorProps = {
    readonly class?: string
}

/**
 * Heroicons: `selector`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconSelector(props: HeroIconSelectorProps) {
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
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
        </svg>
    )
}
