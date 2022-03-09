import { HeroIconAcademicCap } from "+elements"
import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"
import { CareerSection } from "./CareerSection"

type EducationProps = {
    readonly children: ComponentChildren
}

export function Education({
    children,
}: EducationProps) {
    const locale = useLocale()
    
    return (
        <CareerSection
            labelId="education"
            icon={<HeroIconAcademicCap class="h-8 w-8 md:h-10 md:w-10"/>}
            title={{ da: "Uddannelse", en: "Education" }[locale]}
        >
            {children}
        </CareerSection>
    )
}
