import { ProfilePage } from "+profile"
import { content as predefinedContent } from "+profile/content/predefined"
import { render } from "preact"
import "./main.css"

render(<App/>, document.body)

function App() {
    return (
        <ProfilePage content={predefinedContent} activeLanguage="en"/>
    )
}
