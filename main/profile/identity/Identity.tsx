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
        <div class="border-b-8 border-primary-600 bg-gradient-to-br from-white to-primary-50 p-8 dark:from-neutral-900 dark:to-neutral-800">
            <SplitContainer
                class="md:items-end"
                complementary={portrait}
            >
                <div class="mb-8 flex flex-col text-center text-lg font-semibold sm:text-xl md:mt-28 md:text-left md:text-3xl lg:mb-12">
                    <p>{{ da: "Hej! Jeg hedder", en: "Hi! My name is" }[locale]}</p>
                    <p class="whitespace-nowrap text-2xl font-black text-primary-600 sm:text-3xl md:mt-1 md:text-5xl lg:text-6xl">{name}</p>
                    <p class="mt-2 md:mt-4">{status}</p>
                </div>
                {outline}
            </SplitContainer>
        </div>
    )
}
