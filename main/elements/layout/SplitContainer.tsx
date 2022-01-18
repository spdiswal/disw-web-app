import type { ClassList } from "+types"
import type { ComponentChildren } from "preact"

type SplitContainerProps = {
    readonly class?: ClassList
    readonly complementary?: ComponentChildren
    readonly children: ComponentChildren
}

export function SplitContainer({
    class: _class,
    complementary,
    children,
}: SplitContainerProps) {
    return (
        <div class={`flex flex-col / md:flex-row md:gap-x-12 md:max-w-7xl md:mx-auto / lg:gap-x-16 ${_class ?? ""}`}>
            <div class="md:w-1/4 / lg:w-3/8">{complementary}</div>
            <div class="md:w-3/4 / lg:w-5/8">{children}</div>
        </div>
    )
}
