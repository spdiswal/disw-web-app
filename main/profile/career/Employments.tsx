import { SplitContainer } from "+elements"
import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"

type EmploymentsProps = {
    readonly children: ComponentChildren
}

export function Employments({
    children,
}: EmploymentsProps) {
    const locale = useLocale()
    
    return (
        <section class="px-8 pt-8 md:pt-24" aria-labelledby="employments">
            <header class="mb-12">
                <SplitContainer>
                    <h1 id="employments" class="font-light md:text-2xl">{{ da: "Ansættelser", en: "Employments" }[locale]}</h1>
                </SplitContainer>
            </header>
            {children}
        </section>
    )
}
