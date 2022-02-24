import type { ClassValue } from "clsx"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

type SplitContainerProps = {
    readonly class?: ClassValue
    readonly forwardClass?: ClassValue
    readonly complementary?: ComponentChildren
    readonly children: ComponentChildren
}

export function SplitContainer({
    class: _class,
    forwardClass,
    complementary,
    children,
}: SplitContainerProps) {
    return (
        <div class={clsx(_class, "flex flex-col mx-auto max-w-until-sm sm:max-w-until-md md:flex-row md:gap-x-10 md:max-w-until-lg lg:gap-x-16 lg:max-w-7xl")}>
            <div class="md:shrink-0 md:w-1/3-minus-gap-10 lg:w-3/8-minus-gap-16">{complementary}</div>
            <div class={clsx(forwardClass, "md:w-2/3-minus-gap-10 lg:w-5/8-minus-gap-16")}>{children}</div>
        </div>
    )
}
