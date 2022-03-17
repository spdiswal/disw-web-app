import type { IconProps } from "./IconProps"

/**
 * Pantone PMS 485 C: #da291c (red).
 *
 * @see https://flagcolor.com/denmark-flag-colors/
 */
export function FlagIconDenmark(props: IconProps) {
    return (
        <svg
            class={props.class}
            height="24"
            viewBox="0 0 32 32"
            aria-hidden="true"
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

/**
 * Pantone PMS 280 C: #012169 (dark blue).
 * Pantone PMS 186 C: #c8102e (red).
 *
 * @see https://flagcolor.com/british-flag-colors/
 */
export function FlagIconUnitedKingdom(props: IconProps) {
    return (
        <svg
            class={props.class}
            height="24"
            viewBox="0 0 32 32"
            aria-hidden="true"
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
