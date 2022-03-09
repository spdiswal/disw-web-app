type SimpleHeaderProps = {
    readonly labelId: string
    readonly title: string
}

export function SimpleHeader({
    labelId,
    title,
}: SimpleHeaderProps) {
    return (
        <header class="mb-4 md:mb-6 lg:mb-8">
            <h1 id={labelId} class="text-xl font-bold md:text-2xl lg:text-3xl">
                {title}
            </h1>
        </header>
    )
}
