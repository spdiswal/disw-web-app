import { SplitContainer } from "+elements/layout"
import type { Language, Multilingual } from "+i18n"
import type { Identity } from "+profile"
import { ProfileIdentityQuickFact } from "./ProfileIdentityQuickFact"

const namePreamble: Multilingual<string> = { da: "Hej! Jeg hedder", en: "Hi! My name is" }
const areaOfExpertisePreamble: Multilingual<string> = { da: "Og jeg er", en: "And I'm" }
const ageTerm: Multilingual<string> = { da: "Alder", en: "Age" }
const residenceTerm: Multilingual<string> = { da: "Bopæl", en: "Residence" }
const academicDisciplineTerm: Multilingual<string> = { da: "Faglig baggrund", en: "Academic Discipline" }
const workExperienceTerm: Multilingual<string> = { da: "Joberfaring", en: "Work Experience" }

type ProfileIdentityProps = {
    readonly identity: Identity
    readonly activeLanguage: Language
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
    activeLanguage,
}: ProfileIdentityProps) {
    return (
        <div class="bg-gradient-to-br border-b-8 border-primary-600 from-neutral-50 p-8 to-primary-50">
            <SplitContainer
                class="md:items-end"
                complementary={
                    <img
                        class="aspect-square drop-shadow-xl h-auto mb-8 mx-auto rounded-1/3 w-60 / md:-mt-12 md:relative md:top-36 md:w-full md:z-10"
                        src={portrait.assetUrl}
                        alt={portrait.caption[activeLanguage]}
                    />
                }
            >
                <div class="drop-shadow-sm flex flex-col font-bold gap-y-2 mb-8 text-2xl text-center / sm:mb-12 sm:text-3xl / md:text-4xl md:text-left / lg:text-5xl">
                    <p>
                        {namePreamble[activeLanguage]}{" "}<span class="font-black text-primary-600 whitespace-nowrap">{name}</span>.
                    </p>
                    <p>
                        {areaOfExpertisePreamble[activeLanguage]}{" "}{areaOfExpertise[activeLanguage]}.
                    </p>
                </div>
                <dl class="flex flex-col gap-y-6 items-center / sm:flex-row sm:gap-x-10 sm:justify-center sm:mb-4 / md:gap-x-12 md:justify-start / lg:gap-x-16">
                    <ProfileIdentityQuickFact
                        term={ageTerm[activeLanguage]}
                        definition={age[activeLanguage]}
                        class="whitespace-nowrap"
                    />
                    <ProfileIdentityQuickFact
                        term={residenceTerm[activeLanguage]}
                        definition={residence[activeLanguage]}
                    />
                    <ProfileIdentityQuickFact
                        term={academicDisciplineTerm[activeLanguage]}
                        definition={academicDiscipline[activeLanguage]}
                    />
                    <ProfileIdentityQuickFact
                        term={workExperienceTerm[activeLanguage]}
                        definition={workExperience[activeLanguage]}
                        class="whitespace-nowrap"
                    />
                </dl>
            </SplitContainer>
        </div>
    )
}
