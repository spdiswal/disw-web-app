import { createContext } from "preact"
import { useContext } from "preact/hooks"

const SettingsPanelVisibilityContext = createContext<boolean>(true)

export const SettingsPanelVisibilityProvider =
    SettingsPanelVisibilityContext.Provider

export function useSettingsPanelVisibility() {
    return useContext(SettingsPanelVisibilityContext)
}
