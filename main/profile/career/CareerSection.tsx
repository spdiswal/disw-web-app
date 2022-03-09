import type { ComponentChildren, JSX } from "preact"

type CareerSectionProps = {
    readonly labelId: string
    readonly icon: JSX.Element
    readonly title: string
    readonly children: ComponentChildren
}

export function CareerSection({
    labelId,
    icon,
    title,
    children,
}: CareerSectionProps) {
    return (
        <section aria-labelledby={labelId}>
            <header class="my-main-2xs flex flex-col items-center gap-y-2 sm:my-main-2sm md:my-main-md md:gap-y-4 lg:my-main-lg">
                {icon}
                <h1 id={labelId} class="text-2xl font-light md:text-4xl">
                    {title}
                </h1>
            </header>
            <div class="flex flex-col gap-y-24 sm:gap-y-32 md:gap-y-48 lg:gap-y-64">
                {children}
            </div>
        </section>
    )
}
