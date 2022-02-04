import { Paragraph, SplitContainer } from "+elements"
import type { Locale } from "+i18n"
import type { Biography } from "+profile"

type ProfileBiographyProps = {
    readonly biography: Biography
    readonly locale: Locale
}

export function ProfileBiography({
    biography,
    locale,
}: ProfileBiographyProps) {
    return (
        <article id="biography" class="p-8 bg-neutral-300 dark:bg-neutral-700 md:py-12">
            <SplitContainer>
                <Paragraph>{biography[locale]}</Paragraph>
            </SplitContainer>
        </article>
    )
}
