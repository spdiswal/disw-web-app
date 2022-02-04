import type { Locale, Localisable } from "+i18n"
import type { Content } from "+profile"
import { ProfileBiography } from "./ProfileBiography"
import { ProfileIdentity } from "./ProfileIdentity"
import { ProfileOccupationTimeline } from "./ProfileOccupationTimeline"

const careerLabel: Localisable<string> = { da: "Joberfaring", en: "Work Experience" }
const educationLabel: Localisable<string> = { da: "Uddannelse", en: "Education" }

type ProfilePageProps = {
    readonly content: Content
    readonly locale: Locale
}

export function ProfilePage({
    content: { identity, biography, career, education },
    locale,
}: ProfilePageProps) {
    return (
        <main class="flex flex-col">
            <ProfileIdentity
                identity={identity}
                locale={locale}
            />
            <ProfileBiography
                biography={biography}
                locale={locale}
            />
            <ProfileOccupationTimeline
                label={careerLabel}
                labelId="career"
                occupations={career}
                locale={locale}
            />
            <ProfileOccupationTimeline
                class="bg-neutral-100 dark:bg-neutral-800"
                label={educationLabel}
                labelId="education"
                occupations={education}
                locale={locale}
            />
        </main>
    )
}
