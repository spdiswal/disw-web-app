import { SplitContainer } from "+elements/layout"

type FooterProps = {
    readonly copyright: {
        readonly year: number
        readonly owner: string
    }
}

export function Footer({
    copyright: { year, owner },
}: FooterProps) {
    return (
        <footer class="bg-neutral-200 p-8 / md:py-16">
            <SplitContainer class="font-light text-neutral-600">
                &copy; {year} {owner}
            </SplitContainer>
        </footer>
    )
}
