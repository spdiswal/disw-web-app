import { HeroIconBriefcase } from "+elements"
import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"
import { CareerSection } from "./CareerSection"

type EmploymentsProps = {
    readonly children: ComponentChildren
}

export function Employments({
    children,
}: EmploymentsProps) {
    const locale = useLocale()
    
    return (
        <CareerSection
            labelId="employments"
            icon={<HeroIconBriefcase class="h-8 w-8 md:h-10 md:w-10"/>}
            title={{ da: "Ansættelser", en: "Employments" }[locale]}
        >
            {children}
        </CareerSection>
    )
}
