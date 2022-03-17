import { responsiveTextSizeTransitionClasses } from "+elements"
import clsx from "clsx"
import type { JSX } from "preact"

type SimpleHeaderProps = {
    readonly bookmark: JSX.Element
    readonly labelId: string
    readonly title: string
}

export function SimpleHeader({
    bookmark,
    labelId,
    title,
}: SimpleHeaderProps) {
    return (
        <header class="group relative mb-4 -ml-6 flex flex-row items-center sm:-ml-7 md:mb-6 md:-ml-9 lg:mb-8 lg:-ml-10">
            <span
                class={clsx(
                    "absolute opacity-0 focus-within:opacity-100 group-hover:opacity-100",
                    responsiveTextSizeTransitionClasses,
                )}
            >
                {bookmark}
            </span>
            <h1
                id={labelId}
                class={clsx(
                    "ml-6 text-xl font-bold sm:ml-7 md:ml-9 md:text-2xl lg:ml-10 lg:text-3xl",
                    responsiveTextSizeTransitionClasses,
                )}
            >
                {title}
            </h1>
        </header>
    )
}
