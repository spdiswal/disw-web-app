import type { ComponentChildren } from "preact"

type MainProps = {
    readonly children: ComponentChildren
}

export function Main({
    children,
}: MainProps) {
    return (
        <main class="flex flex-col">
            {children}
        </main>
    )
}
