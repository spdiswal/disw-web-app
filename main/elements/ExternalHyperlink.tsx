import clsx from "clsx"
import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"
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
            class={clsx(_class, "group hover:text-accent-600 dark:hover:text-accent-400 hover:underline")}
            href={url}
        >
            {children}
            <HeroIconExternalLink class="hidden mb-1 ml-1 h-5 sm:inline sm:invisible sm:group-hover:visible"/>
        </a>
    )
}
