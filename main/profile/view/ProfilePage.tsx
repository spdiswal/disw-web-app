import type { Localisable } from "+i18n"
import type { Content } from "+profile"
import { ProfileBiography } from "./ProfileBiography"
import { ProfileIdentity } from "./ProfileIdentity"
import { ProfileOccupationTimeline } from "./ProfileOccupationTimeline"

const careerLabel: Localisable<string> = { da: "Joberfaring", en: "Work Experience" }
const educationLabel: Localisable<string> = { da: "Uddannelse", en: "Education" }

type ProfilePageProps = {
    readonly content: Content
}

export function ProfilePage({
    content: { identity, biography, career, education },
}: ProfilePageProps) {
    return (
        <main class="flex flex-col">
            <ProfileIdentity identity={identity}/>
            <ProfileBiography biography={biography}/>
            <ProfileOccupationTimeline
                label={careerLabel}
                labelId="career"
                occupations={career}
            />
            <ProfileOccupationTimeline
                class="bg-neutral-100 dark:bg-neutral-800"
                label={educationLabel}
                labelId="education"
                occupations={education}
            />
        </main>
    )
}
