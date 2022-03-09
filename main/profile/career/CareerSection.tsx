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
            <header class="my-main-2xs flex flex-col items-center sm:my-main-2sm md:my-main-md lg:my-main-lg">
                {icon}
                <h1 id={labelId} class="mt-2 text-2xl font-light md:mt-4 md:text-4xl">
                    {title}
                </h1>
            </header>
            <div class="flex flex-col space-y-24 sm:space-y-32 md:space-y-48 lg:space-y-64">
                {children}
            </div>
        </section>
    )
}
