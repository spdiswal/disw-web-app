import type { ComponentChildren } from "preact"

type MainProps = {
    readonly children: ComponentChildren
}

export function Main({
    children,
}: MainProps) {
    return (
        <main class="mx-screen-xs flex min-w-screen-xs-minus-margin max-w-screen-xs flex-col space-y-2x-screen-xs sm:mx-auto sm:max-w-screen-sm sm:space-y-2x-screen-sm md:max-w-screen-md md:space-y-screen-md lg:max-w-screen-lg lg:space-y-screen-lg">
            {children}
        </main>
    )
}
