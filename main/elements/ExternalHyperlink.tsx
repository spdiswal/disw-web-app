import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses } from "./focus-classes"
import { linkTransitionClasses } from "./transition-classes"

type ExternalHyperlinkProps = {
    readonly class?: string
    readonly url: string
    readonly children: ComponentChildren
}

export function ExternalHyperlink({
    class: _class,
    url,
    children,
}: ExternalHyperlinkProps) {
    return (
        <a
            class={clsx(
                _class,
                "group relative bg-gradient-to-r from-primary-500 to-primary-500 bg-size-border-l bg-position-bl bg-no-repeat pb-0.5 text-primary-600 outline-none hover:bg-size-border-r focus-visible:rounded-full focus-visible:bg-size-border-r focus-visible:outline-offset-4 dark:from-accent-theme-500 dark:to-accent-theme-500 dark:text-accent-theme-500",
                defaultFocusOutlineClasses,
                linkTransitionClasses,
            )}
            href={url}
        >
            {children}
        </a>
    )
}
