export type ReadonlyDate = Readonly<Pick<Date, DateFunctionsToKeep>>

/**
 * A whitelist of functions to expose from the `Date` interface.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
type DateFunctionsToKeep =
    | "getDate"
    | "getDay"
    | "getFullYear"
    | "getHours"
    | "getMilliseconds"
    | "getMinutes"
    | "getMonth"
    | "getSeconds"
    | "getTime"
    | "getTimezoneOffset"
    | "getUTCDate"
    | "getUTCDay"
    | "getUTCFullYear"
    | "getUTCHours"
    | "getUTCMilliseconds"
    | "getUTCMinutes"
    | "getUTCMonth"
    | "getUTCSeconds"
    | "toDateString"
    | "toISOString"
    | "toJSON"
    | "toLocaleDateString"
    | "toLocaleString"
    | "toLocaleTimeString"
    | "toString"
    | "toTimeString"
    | "toUTCString"
    | "valueOf"
