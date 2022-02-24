import type { ClassValue } from "clsx"
import clsx from "clsx"
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
                "group block w-fit hover:underline focus-visible:rounded-md",
                defaultFocusOutlineClasses,
            )}
            href={url}
        >
            {children}
            <HeroIconExternalLink class="hidden mb-0.5 ml-1 h-4.5 sm:inline sm:invisible sm:group-hover:visible"/>
        </a>
    )
}
