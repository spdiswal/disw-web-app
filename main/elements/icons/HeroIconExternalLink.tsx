type HeroIconExternalLinkProps = {
    readonly class?: string
}

/**
 * Heroicons: `external-link`.
 *
 * @see https://heroicons.com/
 */
export function HeroIconExternalLink(props: HeroIconExternalLinkProps) {
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
        </svg>
    )
}
