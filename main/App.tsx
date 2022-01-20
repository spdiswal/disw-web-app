import { LanguagePicker, useActiveLanguage, usePreferredLanguage } from "+i18n"
import { ProfilePage } from "+profile"
import { content } from "+profile/content/predefined"
import { Fragment } from "preact"
import { useEffect } from "preact/hooks"
import { Footer } from "./Footer"

const copyright = {
    year: new Date().getFullYear(),
    owner: content.identity.name,
}

type AppProps = {
    readonly dependencies: AppDependencies
}

export type AppDependencies = {
    readonly languagesOrderedByPreference: ReadonlyArray<string>
}

export function App({
    dependencies: {
        languagesOrderedByPreference,
    },
}: AppProps) {
    useEffect(() => {
        document.title = content.identity.name
    }, [])
    
    const { preferredLanguage } = usePreferredLanguage({
        languagesOrderedByPreference,
        fallbackLanguage: "da",
    })
    
    const { activeLanguage, setActiveLanguage } = useActiveLanguage({
        initialLanguage: preferredLanguage,
    })
    
    return (
        <Fragment>
            <LanguagePicker
                class="relative mx-auto mt-4 w-48 md:absolute md:top-4 md:right-4 md:my-0"
                selection={activeLanguage}
                onLanguageSelected={setActiveLanguage}
            />
            <ProfilePage
                content={content}
                activeLanguage={activeLanguage}
            />
            <Footer copyright={copyright}/>
        </Fragment>
    )
}
