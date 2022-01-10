import { render } from "preact"
import type { AppDependencies } from "./App"
import { App } from "./App"
import "./main.css"

const dependencies: AppDependencies = {
    languagesOrderedByPreference: navigator.languages,
}

render(<App dependencies={dependencies}/>, document.body)
