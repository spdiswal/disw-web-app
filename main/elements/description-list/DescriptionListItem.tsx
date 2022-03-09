import clsx from "clsx"
import type { ComponentChildren } from "preact"
import { Fragment } from "preact"
import { defaultTransitionClasses } from "../constants"

type DescriptionListItemProps = {
    readonly class?: string
    readonly title: string
    readonly children: ComponentChildren
}

export function DescriptionListItem({
    class: _class,
    title,
    children,
}: DescriptionListItemProps) {
    return (
        <Fragment>
            <dt
                class={clsx(
                    "font-semibold text-neutral-600 dark:text-neutral-300",
                    defaultTransitionClasses,
                )}
            >
                {title}
            </dt>
            <dd class={clsx(_class, "-mt-4 sm:mt-0")}>
                {children}
            </dd>
        </Fragment>
    )
}
