import { defaultFocusOutlineClasses, defaultTransitionClasses, GlyphIconGitHub } from "+elements"
import clsx from "clsx"

const copyrightYear = new Date().getFullYear()

type FooterProps = {
    readonly githubUrl: string
    readonly copyrightOwner: string
}

export function Footer({
    githubUrl,
    copyrightOwner,
}: FooterProps) {
    return (
        <footer class="mt-48 min-w-main-xs pb-16 md:mt-64">
            <div class="flex flex-col items-center space-y-2 md:space-y-4">
                <a
                    href={githubUrl}
                    class={clsx(
                        "rounded-full text-neutral-500 dark:text-neutral-400",
                        defaultTransitionClasses,
                        defaultFocusOutlineClasses,
                    )}
                >
                    <span class="sr-only">GitHub</span>
                    <GlyphIconGitHub
                        class={clsx(
                            "h-8 w-8 hover:text-neutral-700 dark:hover:text-neutral-200",
                            defaultTransitionClasses,
                        )}
                    />
                </a>
                <span
                    class={clsx(
                        "font-light text-neutral-600 dark:text-neutral-300",
                        defaultTransitionClasses,
                    )}
                >
                    &copy; {copyrightYear} {copyrightOwner}
                </span>
            </div>
        </footer>
    )
}
