import { SplitContainer } from "+elements"
import type { Locale, Localisable } from "+i18n"
import type { Identity } from "+profile"
import { ProfileIdentityQuickFact } from "./ProfileIdentityQuickFact"

const namePreamble: Localisable<string> = { da: "Hej! Jeg hedder", en: "Hi! My name is" }
const ageTerm: Localisable<string> = { da: "Alder", en: "Age" }
const residenceTerm: Localisable<string> = { da: "Bopæl", en: "Residence" }
const academicDisciplineTerm: Localisable<string> = { da: "Faglig baggrund", en: "Academic Discipline" }
const workExperienceTerm: Localisable<string> = { da: "Joberfaring", en: "Work Experience" }

type ProfileIdentityProps = {
    readonly identity: Identity
    readonly locale: Locale
}

export function ProfileIdentity({
    identity: {
        portrait,
        name,
        areaOfExpertise,
        age,
        residence,
        academicDiscipline,
        workExperience,
    },
    locale,
}: ProfileIdentityProps) {
    return (
        <div class="p-8 bg-gradient-to-br from-neutral-50 dark:from-neutral-900 to-primary-50 dark:to-neutral-800 border-b-8 border-primary-600">
            <SplitContainer
                class="md:items-end"
                complementary={
                    <img
                        class="aspect-square my-8 mx-auto w-60 h-auto rounded-1/3 drop-shadow-xl md:relative md:top-36 md:z-10 md:-mt-12 md:w-full"
                        src={portrait.assetUrl}
                        alt={portrait.caption[locale]}
                    />
                }
            >
                <div class="flex flex-col gap-y-2 mb-8 text-2xl font-bold text-center drop-shadow-sm sm:mt-4 sm:mb-12 sm:text-3xl md:mt-28 md:text-4xl md:text-left lg:text-5xl">
                    <p>{namePreamble[locale]}{" "}<span class="font-black text-primary-600 whitespace-nowrap">{name}</span>.</p>
                    <p>{areaOfExpertise[locale]}</p>
                </div>
                <dl class="flex flex-col gap-y-6 items-center sm:flex-row sm:gap-x-10 sm:justify-center sm:mb-4 md:gap-x-12 md:justify-start lg:gap-x-16">
                    <ProfileIdentityQuickFact
                        term={ageTerm[locale]}
                        definition={age[locale]}
                        class="whitespace-nowrap"
                    />
                    <ProfileIdentityQuickFact
                        term={residenceTerm[locale]}
                        definition={residence[locale]}
                    />
                    <ProfileIdentityQuickFact
                        term={academicDisciplineTerm[locale]}
                        definition={academicDiscipline[locale]}
                    />
                    <ProfileIdentityQuickFact
                        term={workExperienceTerm[locale]}
                        definition={workExperience[locale]}
                        class="whitespace-nowrap"
                    />
                </dl>
            </SplitContainer>
        </div>
    )
}
