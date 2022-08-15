import { useTheme } from "+theme"
import clsx from "clsx"
import type { JSX } from "preact"
import { useEffect, useState } from "preact/hooks"

type ProgressiveThemedImageProps = {
    readonly class?: string
    readonly placeholderImage: JSX.Element
    readonly renderLightThemedImage: (isVisible: boolean) => JSX.Element
    readonly renderDarkThemedImage: (isVisible: boolean) => JSX.Element
}

export function ProgressiveThemedImage({
    class: _class,
    placeholderImage,
    renderLightThemedImage,
    renderDarkThemedImage,
}: ProgressiveThemedImageProps) {
    const theme = useTheme()
    
    // The light theme is the default one and will always be loaded by
    // `index.html` due to pre-rendering.
    // Nevertheless, the web app can defer loading the dark themed image until
    // it is needed.
    const [isDarkImageNeeded, setDarkImageNeeded] = useState(theme === "dark")
    
    useEffect(() => {
        if (theme === "dark") {
            setDarkImageNeeded(true)
        }
    }, [theme])
    
    return (
        <div class={clsx(_class, "relative")}>
            {renderLightThemedImage(theme === "light")}
            {isDarkImageNeeded
                ? renderDarkThemedImage(theme === "dark")
                : null}
            {placeholderImage}
        </div>
    )
}
