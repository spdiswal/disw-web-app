import { LanguagePicker, useActiveLanguage } from "+i18n"
import { ProfilePage } from "+profile"
import { content as predefinedContent } from "+profile/content/predefined"
import { render } from "preact"
import "./main.css"

render(<App/>, document.body)

function App() {
    const { activeLanguage, setActiveLanguage } = useActiveLanguage("en")
    
    return (
        <div class="flex flex-col min-w-min px-8 py-12 / md:py-20 / lg:py-32">
            <LanguagePicker
                class="mb-12 -mt-4 mx-auto relative w-48 / md:absolute md:my-0 md:right-4 md:top-4"
                selection={activeLanguage}
                onLanguageSelected={setActiveLanguage}
            />
            <ProfilePage
                content={predefinedContent}
                activeLanguage={activeLanguage}
            />
        </div>
    )
}
