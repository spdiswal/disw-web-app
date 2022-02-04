import type { Content } from "+profile"
import { ProfilePage } from "+profile"
import type { ByRoleOptions } from "@testing-library/preact"
import { render, screen } from "@testing-library/preact"

export function givenAProfilePageInDanish({ content }: {
    readonly content: Content,
}) {
    const { rerender } = render(
        <ProfilePage content={content} locale="da"/>,
    )
    
    return {
        whenRenderingTheProfilePageInEnglish: () => {
            rerender(<ProfilePage content={content} locale="en"/>)
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
    const articles = screen.getAllByRole("article", queryOptions)
    return articles.filter((article) => article.id !== "biography")
}
