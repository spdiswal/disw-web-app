export type JsonValue =
    | JsonPrimitive
    | JsonObject
    | JsonArray

export type JsonPrimitive =
    | boolean
    | null
    | number
    | string

export type JsonObject = {
    readonly [key: string]: JsonValue
}

export type JsonArray = ReadonlyArray<JsonValue>
