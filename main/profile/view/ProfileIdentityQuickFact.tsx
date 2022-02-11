import type { ClassValue } from "clsx"
import clsx from "clsx"

type ProfileIdentityQuickFactProps = {
    readonly class?: ClassValue
    readonly term: string
    readonly definition: string
}

export function ProfileIdentityQuickFact({
    class: _class,
    term,
    definition,
}: ProfileIdentityQuickFactProps) {
    return (
        <div class={clsx(_class, "text-center")}>
            <dt>{term}</dt>
            <dd class="font-bold text-primary-600 md:text-2xl">{definition}</dd>
        </div>
    )
}
