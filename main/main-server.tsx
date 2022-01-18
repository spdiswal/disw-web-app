import { content } from "+profile/content/predefined"
import { renderToString } from "preact-render-to-string"
import type { AppDependencies } from "./App"
import { App } from "./App"

const dependencies: AppDependencies = {
    languagesOrderedByPreference: [],
}

// Dynamically imported by `vite.config.ts` when pre-rendering `index.html`.
export const title = `<title>${content.identity.name}</title>`
export const body = renderToString(<App dependencies={dependencies}/>)
