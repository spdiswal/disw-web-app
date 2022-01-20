import { Paragraph, SplitContainer } from "+elements/layout"
import type { Language } from "+i18n"
import type { Biography } from "+profile"

type ProfileBiographyProps = {
    readonly biography: Biography
    readonly activeLanguage: Language
}

export function ProfileBiography({
    biography,
    activeLanguage,
}: ProfileBiographyProps) {
    return (
        <article id="biography" class="p-8 bg-neutral-300 dark:bg-neutral-700 md:py-12">
            <SplitContainer>
                <Paragraph>{biography[activeLanguage]}</Paragraph>
            </SplitContainer>
        </article>
    )
}
