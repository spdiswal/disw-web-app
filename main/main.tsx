import { render } from "preact"
import { Greeting } from "./Greeting"
import "./main.css"

render(<App/>, document.body)

function App() {
    return (
        <div class="mx-auto">
            <Greeting name="friend"/>
        </div>
    )
}
