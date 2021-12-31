type FlagIconUnitedKingdomProps = Readonly<{
    class?: string
}>

/**
 * Pantone PMS 280 C: #012169 (dark blue).
 * Pantone PMS 186 C: #c8102e (red).
 *
 * @see https://flagcolor.com/british-flag-colors/
 */
export function FlagIconUnitedKingdom({
    class: _class,
}: FlagIconUnitedKingdomProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`aspect-square ${_class ?? ""}`}
            viewBox="0 0 32 32"
        >
            <rect width="32" height="32" fill="#012169"/>
            <path
                stroke="white"
                stroke-width="6"
                d="M 0,0 L 32,32 M 0,32 L 32,0"
            />
            <path
                stroke="#c8102e"
                stroke-width="2"
                d="M -1,0 L 15,16 M 17,16 L 33,32 M 1,32 L 17,16 M 15,16 L 31,0"
            />
            <path
                stroke="white"
                stroke-width="10"
                d="M 16,0 V 32 M 0,16 H 32"
            />
            <path
                stroke="#c8102e"
                stroke-width="6"
                d="M 16,0 V 32 M 0,16 H 32"
            />
        </svg>
    )
}
