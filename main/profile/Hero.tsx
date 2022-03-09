import { defaultTransitionClasses } from "+elements"
import { useLocale } from "+i18n"
import clsx from "clsx"
import type { JSX } from "preact"

type HeroProps = {
    readonly background: JSX.Element
    readonly name: string
}

export function Hero({
    background,
    name,
}: HeroProps) {
    const locale = useLocale()
    
    return (
        <header class="relative flex min-w-main-xs flex-col items-center md:justify-center lg:mx-auto lg:max-w-main-xl">
            <div class="max-h-120 overflow-hidden sm:max-h-160 md:max-h-120 lg:max-h-160">
                {background}
            </div>
            <div class="absolute bottom-8 z-10 flex flex-col items-center sm:bottom-16 md:bottom-auto md:right-16 lg:right-32">
                <div
                    class={clsx(
                        "flex flex-col rounded-2xl bg-gradient-to-br from-neutral-500/75 to-neutral-700/75 px-3 py-2 text-center text-white shadow-xl backdrop-blur-sm dark:from-neutral-600/75 dark:to-neutral-800/75 sm:gap-y-1 sm:px-4 sm:py-3 md:gap-y-1.5 md:px-6 md:py-5 lg:gap-y-2 lg:px-8 lg:py-6",
                        defaultTransitionClasses,
                    )}
                >
                    <p class="whitespace-nowrap text-xl font-semibold sm:text-2xl md:text-3xl">
                        {{ da: "Hej! Jeg hedder", en: "Hi! My name is" }[locale]}
                    </p>
                    <p class="whitespace-nowrap text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
                        {name}
                    </p>
                </div>
            </div>
        </header>
    )
}
