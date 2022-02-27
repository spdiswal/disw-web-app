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
        <div class={clsx(_class, "mx-auto flex max-w-until-sm flex-col sm:max-w-until-md md:max-w-until-lg md:flex-row md:gap-x-10 lg:max-w-7xl lg:gap-x-16")}>
            <div class="md:w-1/3-minus-gap-10 md:shrink-0 lg:w-3/8-minus-gap-16">{complementary}</div>
            <div class="md:w-2/3-minus-gap-10 lg:w-5/8-minus-gap-16">{children}</div>
        </div>
    )
}
