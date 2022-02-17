import type { Digit, PositiveDigit } from "./Digit"

export type Year = `20${Digit}${Digit}`
export type Month = `0${PositiveDigit}` | "10" | "11" | "12"
