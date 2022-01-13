import { LanguagePicker, useActiveLanguage, usePreferredLanguage } from "+i18n"
import { ProfilePage } from "+profile"
import { content } from "+profile/content/predefined"
import { useEffect } from "preact/hooks"

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
        document.title = content.name
    }, [])
    
    const { preferredLanguage } = usePreferredLanguage({
        languagesOrderedByPreference,
        fallbackLanguage: "da",
    })
    
    const { activeLanguage, setActiveLanguage } = useActiveLanguage({
        initialLanguage: preferredLanguage,
    })
    
    return (
        <div class="flex flex-col min-w-min px-8 py-12 / md:py-20 / lg:py-32">
            <LanguagePicker
                class="mb-12 -mt-4 mx-auto relative w-48 / md:absolute md:my-0 md:right-4 md:top-4"
                selection={activeLanguage}
                onLanguageSelected={setActiveLanguage}
            />
            <ProfilePage
                content={content}
                activeLanguage={activeLanguage}
            />
        </div>
    )
}
