import clsx from "clsx"
import type { ClassValue } from "clsx"
import type { ComponentChildren } from "preact"
import { Fragment } from "preact"

type DescriptionListItemProps = {
    readonly forwardClass?: ClassValue
    readonly title: string
    readonly children: ComponentChildren
}

export function DescriptionListItem({
    forwardClass,
    title,
    children,
}: DescriptionListItemProps) {
    return (
        <Fragment>
            <dt class="font-semibold text-neutral-600 dark:text-neutral-300">
                {title}
            </dt>
            <dd class={clsx(forwardClass, "-mt-4 sm:mt-0")}>
                {children}
            </dd>
        </Fragment>
    )
}
