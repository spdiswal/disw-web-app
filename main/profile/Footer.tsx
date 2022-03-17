import { defaultFocusOutlineClasses, themeSwitchTransitionClasses, GlyphIconGitHub } from "+elements"
import clsx from "clsx"
import type { ComponentChildren } from "preact"

const copyrightYear = new Date().getFullYear()

type FooterProps = {
    readonly githubUrl: string
    readonly copyrightOwner: string
    readonly children?: ComponentChildren
}

export function Footer({
    githubUrl,
    copyrightOwner,
    children,
}: FooterProps) {
    return (
        <footer class="mt-48 min-w-screen-xs px-8 pb-16 md:mt-64">
            <div
                class={clsx(
                    "flex flex-col items-center space-y-4 font-light text-neutral-600 dark:text-neutral-300",
                    themeSwitchTransitionClasses,
                )}
            >
                <a
                    href={githubUrl}
                    class={clsx(
                        "rounded-full text-neutral-500 dark:text-neutral-400",
                        themeSwitchTransitionClasses,
                        defaultFocusOutlineClasses,
                    )}
                >
                    <span class="sr-only">GitHub</span>
                    <GlyphIconGitHub
                        class={clsx(
                            "h-8 w-8 hover:text-neutral-700 dark:hover:text-neutral-200",
                            themeSwitchTransitionClasses,
                        )}
                    />
                </a>
                <span>&copy; {copyrightYear} {copyrightOwner}</span>
                {children}
            </div>
        </footer>
    )
}
