import type { ComponentChildren } from "preact"
import type { DeepReadonly } from "ts-essentials"

export type Props<CustomProps> =
    DefaultProps & DeepReadonly<CustomProps>

export type DefaultProps = Readonly<Partial<{
    id: string
    class: string
    children: ComponentChildren
}>>
