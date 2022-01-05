import type { Language } from "+i18n"
import type { Content } from "+profile"
import { ProfilePage } from "+profile"
import type { ByRoleOptions } from "@testing-library/preact"
import { render, screen } from "@testing-library/preact"

export function givenAProfilePage(options: {
    readonly content: Content,
    readonly activeLanguage?: Language,
}) {
    render((
        <ProfilePage
            content={options.content}
            activeLanguage={options.activeLanguage ?? "en"}
        />
    ))
}

export async function theProfilePage(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("main", queryOptions)
}

export async function thePortrait(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("img", queryOptions)
}

export async function theOccupation(
    queryOptions?: ByRoleOptions,
): Promise<HTMLElement> {
    return screen.findByRole("article", queryOptions)
}

export async function theOccupations(
    queryOptions?: ByRoleOptions,
): Promise<ReadonlyArray<HTMLElement>> {
    return screen.findAllByRole("article", queryOptions)
}
