import type { Content } from "+profile"
import { ProfilePage } from "+profile"
import type { ByRoleOptions } from "@testing-library/preact"
import { render, screen } from "@testing-library/preact"

export function givenAProfilePageInDanish({ content }: {
    readonly content: Content,
}) {
    const { rerender } = render(
        <ProfilePage content={content} activeLanguage="da"/>,
    )
    
    return {
        whenRenderingTheProfilePageInEnglish: () => {
            rerender(
                <ProfilePage content={content} activeLanguage="en"/>,
            )
        },
    }
}

export function theProfilePage(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("main", queryOptions)
}

export function thePortrait(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("img", queryOptions)
}

export function theOccupation(queryOptions?: ByRoleOptions): HTMLElement {
    return screen.getByRole("article", queryOptions)
}

export function theOccupations(
    queryOptions?: ByRoleOptions,
): ReadonlyArray<HTMLElement> {
    return screen.getAllByRole("article", queryOptions)
}
