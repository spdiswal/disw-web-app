import type { ClassList } from "+types"

type ProfileIdentityQuickFactProps = {
    readonly class?: ClassList
    readonly term: string
    readonly definition: string
}

export function ProfileIdentityQuickFact({
    class: _class,
    term,
    definition,
}: ProfileIdentityQuickFactProps) {
    return (
        <div class={`text-center ${_class ?? ""}`}>
            <dt>{term}</dt>
            <dd class="font-bold text-primary-600 / md:text-2xl">{definition}</dd>
        </div>
    )
}