import { defaultFocusOutlineClasses, HeroIconLink, themeSwitchTransitionClasses } from "+elements"
import { useLocale } from "+i18n"
import clsx from "clsx"
import type { ComponentChildren, JSX } from "preact"

type ArticleProps = {
    readonly id: string
    readonly image?: JSX.Element
    readonly renderHeader: (
        bookmark: JSX.Element,
        labelId: string,
    ) => JSX.Element
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
                "flex w-full flex-col pt-screen-xs sm:pt-screen-sm md:space-x-screen-md md:pt-screen-md lg:space-x-screen-lg lg:pt-screen-lg",
            )}
            aria-labelledby={headerId}
        >
            <div class="md:w-1/2-minus-screen-md-gap lg:w-1/2-minus-screen-lg-gap">{image}</div>
            <div class="md:w-1/2-minus-screen-md-gap lg:w-1/2-minus-screen-lg-gap">
                {renderHeader(<Bookmark anchorId={id}/>, headerId)}
                <div class="flex flex-col space-y-10 pt-2">
                    {children}
                </div>
            </div>
        </article>
    )
}

type BookmarkProps = {
    readonly anchorId: string
}

function Bookmark({
    anchorId,
}: BookmarkProps) {
    const locale = useLocale()
    
    return (
        <a
            href={`#${anchorId}`}
            class={clsx(
                "block rounded-full text-neutral-500 dark:text-neutral-400",
                themeSwitchTransitionClasses,
                defaultFocusOutlineClasses,
            )}
        >
            <span class="sr-only">{{ da: "Bogmærke til dette sted", en: "Bookmark to this location" }[locale]}</span>
            <HeroIconLink
                class={clsx(
                    "h-5 w-5 hover:text-neutral-700 dark:hover:text-neutral-200 md:h-6 md:w-6 lg:h-7 lg:w-7",
                    themeSwitchTransitionClasses,
                )}
            />
        </a>
    )
}
