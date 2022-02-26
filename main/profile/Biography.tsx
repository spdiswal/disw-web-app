import { SplitContainer } from "+elements"
import type { ComponentChildren } from "preact"

type BiographyProps = {
    readonly id: string
    readonly children: ComponentChildren
}

export function Biography({
    id,
    children,
}: BiographyProps) {
    return (
        <article id={id} class="p-8 bg-neutral-300 dark:bg-neutral-700 md:py-12">
            <SplitContainer>
                <div class="flex flex-col gap-y-3 md:gap-y-2 md:max-w-2xl">
                    {children}
                </div>
            </SplitContainer>
        </article>
    )
}
