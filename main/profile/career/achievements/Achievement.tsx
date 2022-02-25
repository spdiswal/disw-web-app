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
        <div class={clsx(_class, "overflow-hidden flex-1 p-4 -mx-4 bg-white/75 dark:bg-white/5 rounded-lg border border-primary-300 dark:border-primary-500 shadow md:p-6 md:-mx-6")}>
            {children}
        </div>
    )
}
