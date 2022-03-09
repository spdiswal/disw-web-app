type HeroIconPlusProps = {
    readonly class?: string
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
                d="M12 4v16m8-8H4"
            />
        </svg>
    )
}
