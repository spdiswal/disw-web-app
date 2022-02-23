import clsx from "clsx"
import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"
import { defaultFocusOutlineClasses } from "./constants"
import { HeroIconExternalLink } from "./icons"

type ExternalHyperlinkProps = {
    readonly class?: ClassValue
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
                "group flex gap-x-1 items-center hover:underline focus-visible:rounded-md",
                defaultFocusOutlineClasses,
            )}
            href={url}
        >
            {children}
            <HeroIconExternalLink class="hidden h-5 sm:inline sm:invisible sm:group-hover:visible"/>
        </a>
    )
}
