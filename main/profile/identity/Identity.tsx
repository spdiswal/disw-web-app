import { SplitContainer } from "+elements"
import { useLocale } from "+i18n"
import type { JSX } from "preact"

type IdentityProps = {
    readonly name: string
    readonly status: string
    readonly portrait: JSX.Element
    readonly outline: JSX.Element
}

export function Identity({
    name,
    status,
    portrait,
    outline,
}: IdentityProps) {
    const locale = useLocale()
    
    return (
        <div class="p-8 bg-gradient-to-br from-white dark:from-neutral-900 to-primary-50 dark:to-neutral-800 border-b-8 border-primary-600">
            <SplitContainer
                class="md:items-end"
                complementary={portrait}
            >
                <div class="flex flex-col mb-8 text-lg font-semibold text-center sm:text-xl md:mt-28 md:text-3xl md:text-left lg:mb-12">
                    <p>{{ da: "Hej! Jeg hedder", en: "Hi! My name is" }[locale]}</p>
                    <p class="text-2xl font-black text-primary-600 whitespace-nowrap sm:text-3xl md:mt-1 md:text-5xl lg:text-6xl">{name}</p>
                    <p class="mt-2 md:mt-4">{status}</p>
                </div>
                {outline}
            </SplitContainer>
        </div>
    )
}
