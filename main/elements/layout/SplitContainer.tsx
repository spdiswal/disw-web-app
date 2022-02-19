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
        <div class={clsx(_class, "flex flex-col mx-auto max-w-until-sm sm:max-w-until-md md:flex-row md:gap-x-10 md:max-w-until-lg lg:gap-x-16 lg:max-w-7xl")}>
            <div class="md:shrink-0 md:w-1/3 lg:w-3/8">{complementary}</div>
            <div class="md:overflow-x-hidden md:w-2/3 lg:w-5/8">{children}</div>
        </div>
    )
}
