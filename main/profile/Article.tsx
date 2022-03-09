import clsx from "clsx"
import type { ComponentChildren, JSX } from "preact"

type ArticleProps = {
    readonly id: string
    readonly class?: string
    readonly image?: JSX.Element
    readonly renderHeader: (labelId: string) => JSX.Element
    readonly children: ComponentChildren
}

export function Article({
    id,
    class: _class,
    image,
    renderHeader,
    children,
}: ArticleProps) {
    const headerId = `${id}-header`
    
    return (
        <article
            id={id}
            class={clsx(
                _class ?? "md:flex-row",
                image && "gap-y-8 sm:gap-y-12",
                "flex w-full flex-col md:gap-x-main-md lg:gap-x-main-lg",
            )}
            aria-labelledby={headerId}
        >
            <div class="md:w-1/2-minus-gap-main-md lg:w-1/2-minus-gap-main-lg">{image}</div>
            <div class="md:w-1/2-minus-gap-main-md lg:w-1/2-minus-gap-main-lg">
                {renderHeader(headerId)}
                <div class="flex flex-col gap-y-12">
                    {children}
                </div>
            </div>
        </article>
    )
}
