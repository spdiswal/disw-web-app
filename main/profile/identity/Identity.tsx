import { SplitContainer } from "+elements"
import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"
import type { JSX } from "preact"

type IdentityProps = {
    readonly name: string
    readonly status: Localisable<string>
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
        <div class="p-8 bg-gradient-to-br from-neutral-50 dark:from-neutral-900 to-primary-50 dark:to-neutral-800 border-b-8 border-primary-600">
            <SplitContainer
                class="md:items-end"
                complementary={portrait}
            >
                <div class="flex flex-col gap-y-2 mb-8 text-2xl font-bold text-center drop-shadow-sm sm:mt-4 sm:mb-12 sm:text-3xl md:mt-28 md:text-4xl md:text-left lg:text-5xl">
                    <p>{{ da: "Hej! Jeg hedder", en: "Hi! My name is" }[locale]}{" "}<span class="font-black text-primary-600 whitespace-nowrap">{name}</span>.</p>
                    <p>{status[locale]}</p>
                </div>
                {outline}
            </SplitContainer>
        </div>
    )
}
