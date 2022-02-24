import { SplitContainer } from "+elements"
import type { ComponentChildren } from "preact"

type BiographyProps = {
    readonly children: ComponentChildren
}

export function Biography({
    children,
}: BiographyProps) {
    return (
        <article id="biography" class="p-8 bg-neutral-300 dark:bg-neutral-700 md:py-12">
            <SplitContainer forwardClass="flex flex-col gap-y-2 md:max-w-2xl">
                {children}
            </SplitContainer>
        </article>
    )
}
