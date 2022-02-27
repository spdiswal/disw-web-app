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
        <article id={id} class="bg-neutral-300 p-8 dark:bg-neutral-700 md:py-12">
            <SplitContainer>
                <div class="flex flex-col gap-y-3 md:max-w-2xl md:gap-y-2">
                    {children}
                </div>
            </SplitContainer>
        </article>
    )
}
