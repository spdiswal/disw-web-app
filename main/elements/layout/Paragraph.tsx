import type { ComponentChildren } from "preact"

type ParagraphProps = {
    readonly children: ComponentChildren
}

export function Paragraph({
    children,
}: ParagraphProps) {
    return (
        <p class="max-w-xl">{children}</p>
    )
}
