import type { Language, Multilingual } from "+i18n"
import type { Content } from "+profile"
import { ProfileBiography } from "./ProfileBiography"
import { ProfileIdentity } from "./ProfileIdentity"
import { ProfileOccupationTimeline } from "./ProfileOccupationTimeline"

const careerLabel: Multilingual<string> = { da: "Joberfaring", en: "Work Experience" }
const educationLabel: Multilingual<string> = { da: "Uddannelse", en: "Education" }

type ProfilePageProps = {
    readonly content: Content
    readonly activeLanguage: Language
}

export function ProfilePage({
    content: { identity, biography, career, education },
    activeLanguage,
}: ProfilePageProps) {
    return (
        <main class="flex flex-col">
            <ProfileIdentity
                identity={identity}
                activeLanguage={activeLanguage}
            />
            <ProfileBiography
                biography={biography}
                activeLanguage={activeLanguage}
            />
            <ProfileOccupationTimeline
                label={careerLabel}
                labelId="career"
                occupations={career}
                activeLanguage={activeLanguage}
            />
            <ProfileOccupationTimeline
                class="bg-neutral-100 dark:bg-neutral-800"
                label={educationLabel}
                labelId="education"
                occupations={education}
                activeLanguage={activeLanguage}
            />
        </main>
    )
}
