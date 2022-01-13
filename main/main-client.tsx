import { hydrate } from "preact"
import type { AppDependencies } from "./App"
import { App } from "./App"
import "./index.css"

const dependencies: AppDependencies = {
    languagesOrderedByPreference: navigator.languages,
}

hydrate(<App dependencies={dependencies}/>, document.body)
