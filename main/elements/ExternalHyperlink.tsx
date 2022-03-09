import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses } from "./constants"
import { HeroIconExternalLink } from "./icons"

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
                "group block w-fit hover:underline focus-visible:rounded-full",
                defaultFocusOutlineClasses,
            )}
            href={url}
        >
            {children}
            <HeroIconExternalLink class="mb-0.5 ml-1 hidden h-4.5 w-4.5 sm:invisible sm:inline sm:group-hover:visible"/>
        </a>
    )
}
