import { useLocale } from "+i18n"
import type { Localisable } from "+i18n"
import { Fragment } from "preact"

type DescriptionListItemProps = {
    readonly title: Localisable<string>
    readonly value: Localisable<string>
}

export function DescriptionListItem({
    title,
    value,
}: DescriptionListItemProps) {
    const locale = useLocale()
    
    return (
        <Fragment>
            <dt class="font-semibold text-neutral-600 dark:text-neutral-300">{title[locale]}</dt>
            <dd class="-mt-4 text-neutral-900 dark:text-neutral-50 sm:mt-0">{value[locale]}</dd>
        </Fragment>
    )
}
