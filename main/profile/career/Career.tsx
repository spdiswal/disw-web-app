import { Fragment } from "preact"
import type { ComponentChildren } from "preact"

type CareerProps = {
    readonly children: ComponentChildren
}

export function Career({
    children,
}: CareerProps) {
    return (
        <Fragment>{children}</Fragment>
    )
}
