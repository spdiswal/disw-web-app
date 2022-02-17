import type { JSX } from "preact"
import { Fragment } from "preact"

type ContentProps = {
    readonly identity: JSX.Element
    readonly biography: JSX.Element
    readonly career: JSX.Element
    readonly footer: JSX.Element
}

export function Content({
    identity,
    biography,
    career,
    footer,
}: ContentProps) {
    return (
        <Fragment>
            <main class="flex flex-col">
                {identity}
                {biography}
                {career}
            </main>
            {footer}
        </Fragment>
    )
}
