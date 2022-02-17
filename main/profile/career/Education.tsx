import { SplitContainer } from "+elements"
import { useLocale } from "+i18n"
import type { ComponentChildren } from "preact"

type EducationProps = {
    readonly children: ComponentChildren
}

export function Education({
    children,
}: EducationProps) {
    const locale = useLocale()
    
    return (
        <section class="px-8 pt-8 bg-neutral-100 dark:bg-neutral-800 md:pt-24" aria-labelledby="education">
            <header class="mb-12">
                <SplitContainer>
                    <h1 id="education" class="font-light md:text-2xl">{{ da: "Uddannelse", en: "Education" }[locale]}</h1>
                </SplitContainer>
            </header>
            {children}
        </section>
    )
}
