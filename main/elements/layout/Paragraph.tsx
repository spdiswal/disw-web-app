import type { Localisable } from "+i18n"
import { useLocale } from "+i18n"

export function Paragraph(props: Localisable<string>) {
    const locale = useLocale()
    
    return (
        <p>{props[locale]}</p>
    )
}
