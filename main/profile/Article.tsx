import clsx from "clsx"
import type { ComponentChildren, JSX } from "preact"

type ArticleProps = {
    readonly id: string
    readonly image?: JSX.Element
    readonly renderHeader: (labelId: string) => JSX.Element
    readonly swapped?: true
    readonly children: ComponentChildren
}

export function Article({
    id,
    image,
    renderHeader,
    swapped,
    children,
}: ArticleProps) {
    const headerId = `${id}-header`
    
    return (
        <article
            id={id}
            class={clsx(
                image && "space-y-8 sm:space-y-12 md:space-y-0",
                swapped ? "md:flex-row-reverse md:space-x-reverse lg:space-x-reverse" : "md:flex-row",
                "flex w-full flex-col md:space-x-main-md lg:space-x-main-lg",
            )}
            aria-labelledby={headerId}
        >
            <div class="md:w-1/2-minus-gap-main-md lg:w-1/2-minus-gap-main-lg">{image}</div>
            <div class="md:w-1/2-minus-gap-main-md lg:w-1/2-minus-gap-main-lg">
                {renderHeader(headerId)}
                <div class="flex flex-col space-y-12">
                    {children}
                </div>
            </div>
        </article>
    )
}
