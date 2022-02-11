import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type SplitContainerProps = {
    readonly class?: ClassValue
    readonly complementary?: ComponentChildren
    readonly children: ComponentChildren
}

export function SplitContainer({
    class: _class,
    complementary,
    children,
}: SplitContainerProps) {
    return (
        <div class={clsx(_class, "flex flex-col md:flex-row md:gap-x-12 md:mx-auto md:max-w-7xl lg:gap-x-16")}>
            <div class="md:w-1/4 lg:w-3/8">{complementary}</div>
            <div class="md:w-3/4 lg:w-5/8">{children}</div>
        </div>
    )
}
