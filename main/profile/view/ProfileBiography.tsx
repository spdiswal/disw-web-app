import { Paragraph, SplitContainer } from "+elements"
import { useLocale } from "+i18n"
import type { Biography } from "+profile"

type ProfileBiographyProps = {
    readonly biography: Biography
}

export function ProfileBiography({
    biography,
}: ProfileBiographyProps) {
    const locale = useLocale()
    
    return (
        <article id="biography" class="p-8 bg-neutral-300 dark:bg-neutral-700 md:py-12">
            <SplitContainer>
                <Paragraph>{biography[locale]}</Paragraph>
            </SplitContainer>
        </article>
    )
}
