import type { ComponentChildren } from "preact"

type EvenFlexBasisProps = {
    readonly children: ComponentChildren
}

export function EvenFlexBasis({ children }: EvenFlexBasisProps) {
    return (
        <div class="md:basis-48 md:grow-1 / lg:basis-64">
            {children}
        </div>
    )
}
