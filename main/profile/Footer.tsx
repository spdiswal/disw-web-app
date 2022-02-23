import { GlyphIconGitHub } from "+elements"

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
        <footer class="p-8 bg-neutral-200 dark:bg-neutral-900 md:py-16">
            <div class="flex flex-col gap-y-2 items-center md:gap-y-4">
                <div class="flex gap-x-2 justify-center text-neutral-500 dark:text-neutral-400">
                    <a href={githubUrl}>
                        <span class="sr-only">GitHub</span>
                        <GlyphIconGitHub class="h-8 hover:text-neutral-700 dark:hover:text-neutral-200"/>
                    </a>
                </div>
                <span class="font-light text-neutral-600 dark:text-neutral-300">
                    &copy; {copyrightYear} {copyrightOwner}
                </span>
            </div>
        </footer>
    )
}
