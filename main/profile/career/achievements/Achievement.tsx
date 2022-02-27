import clsx from "clsx"
import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"

type AchievementProps = {
    readonly class?: ClassValue
    readonly children: ComponentChildren
}

export function Achievement({
    class: _class,
    children,
}: AchievementProps) {
    return (
        <div class={clsx(_class, "-mx-4 flex-1 overflow-hidden rounded-lg border border-primary-300 bg-white/75 p-4 shadow dark:border-primary-500 dark:bg-white/5 md:-mx-6 md:p-6")}>
            {children}
        </div>
    )
}
