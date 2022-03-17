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
                "group relative bg-gradient-to-r from-accent-500 to-accent-500 bg-link-underline-invisible bg-link-underline bg-no-repeat pb-0.5 text-accent-600 outline-none hover:bg-link-underline-visible focus-visible:rounded-full focus-visible:bg-link-underline-visible focus-visible:outline-offset-4 dark:from-primary-500 dark:to-primary-500 dark:text-primary-500",
                defaultFocusOutlineClasses,
                linkTransitionClasses,
            )}
            href={url}
        >
            {children}
        </a>
    )
}
