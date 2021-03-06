import { responsiveTextSizeTransitionClasses, themeSwitchTransitionClasses } from "+elements"
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
        <header class="relative flex min-w-screen-xs flex-col items-center md:justify-center lg:mx-auto lg:max-w-screen-2xl">
            {background}
            <div class="absolute bottom-4 z-10 flex flex-col items-center sm:bottom-8 md:bottom-auto md:right-16 lg:right-32">
                <div
                    class={clsx(
                        "flex flex-col rounded-2xl bg-gradient-to-br from-neutral-500/75 to-neutral-700/75 px-3 py-2 text-center text-white shadow-xl ring-1 ring-neutral-400/50 backdrop-blur-sm dark:from-neutral-600/75 dark:to-neutral-800/75 dark:ring-neutral-500/50 sm:space-y-1 sm:px-4 sm:py-3 md:space-y-1.5 md:px-6 md:py-5 lg:space-y-2 lg:px-8 lg:py-6",
                        themeSwitchTransitionClasses,
                    )}
                >
                    <p
                        class={clsx(
                            "whitespace-nowrap text-xl font-semibold sm:text-2xl md:text-3xl",
                            responsiveTextSizeTransitionClasses,
                        )}
                    >
                        {{ da: "Hej! Jeg hedder", en: "Hi! My name is" }[locale]}
                    </p>
                    <p
                        class={clsx(
                            "whitespace-nowrap text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl",
                            responsiveTextSizeTransitionClasses,
                        )}
                    >
                        {name}
                    </p>
                </div>
            </div>
        </header>
    )
}
