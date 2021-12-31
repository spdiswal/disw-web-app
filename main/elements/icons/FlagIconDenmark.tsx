type FlagIconDenmarkProps = Readonly<{
    class?: string
}>

/**
 * Pantone PMS 485 C: #da291c (red).
 *
 * @see https://flagcolor.com/denmark-flag-colors/
 */
export function FlagIconDenmark({
    class: _class,
}: FlagIconDenmarkProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`aspect-square ${_class ?? ""}`}
            viewBox="0 0 32 32"
        >
            <rect width="32" height="32" fill="#da291c"/>
            <path
                stroke="white"
                stroke-width="5"
                d="M 0,16 L 32,16 M 13,0 L 13,32"
            />
        </svg>
    )
}
