type HeroIconCheckProps = {
    readonly class?: string
}

/**
 * Heroicons: `check`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconCheck(props: HeroIconCheckProps) {
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
                d="M5 13l4 4L19 7"
            />
        </svg>
    )
}
