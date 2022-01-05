import type { Flavour } from "./Flavour"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class
 */
export type ClassList = string & Flavour<"ClassList">

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id
 */
export type Id<Discriminator extends string> = string & Flavour<`${Discriminator}Id`>
