import type { Theme } from "+theme"
import { defaultTheme } from "+theme"
import { createContext } from "preact"
import { useContext } from "preact/hooks"

const ThemeContext = createContext<Theme>(defaultTheme)

export const ThemeProvider = ThemeContext.Provider

export function useTheme(): Theme {
    return useContext(ThemeContext)
}
