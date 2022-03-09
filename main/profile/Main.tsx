import type { ComponentChildren } from "preact"

type MainProps = {
    readonly children: ComponentChildren
}

export function Main({
    children,
}: MainProps) {
    return (
        <main class="mx-main-xs my-main-2xs flex min-w-main-xs-minus-margin max-w-main-xs flex-col gap-y-main-2xs sm:mx-auto sm:my-main-2sm sm:max-w-main-sm sm:gap-y-main-2sm md:m-main-md md:max-w-main-md md:gap-y-main-md lg:my-main-lg lg:mx-auto lg:max-w-main-lg lg:gap-y-main-lg">
            {children}
        </main>
    )
}
