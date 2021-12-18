import { ProfilePage } from "+profile"
import { render } from "preact"
import "./main.css"

render(<App/>, document.body)

function App() {
    return (
        <ProfilePage name="Perseverance"/>
    )
}
