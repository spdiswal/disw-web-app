import type { DefaultProps } from "+types"

export function EvenFlexBasis({ children }: DefaultProps) {
    return (
        <div class="md:basis-48 md:grow-1 / lg:basis-64">
            {children}
        </div>
    )
}
