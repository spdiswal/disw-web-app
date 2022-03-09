import { defaultTransitionClasses } from "+elements"
import clsx from "clsx"

type SimpleHeaderProps = {
    readonly labelId: string
    readonly title: string
}

export function SimpleHeader({
    labelId,
    title,
}: SimpleHeaderProps) {
    return (
        <header class="mb-4 md:mb-6 lg:mb-8">
            <h1
                id={labelId}
                class={clsx(
                    "text-xl font-bold md:text-2xl lg:text-3xl",
                    defaultTransitionClasses,
                )}
            >
                {title}
            </h1>
        </header>
    )
}
