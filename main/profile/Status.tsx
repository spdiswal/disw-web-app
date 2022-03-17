import { responsiveTextSizeTransitionClasses, themeSwitchTransitionClasses } from "+elements"
import { useLocale } from "+i18n"
import clsx from "clsx"

type StatusProps = {
    readonly age: string
    readonly residence: string
    readonly discipline: string
    readonly experience: string
}

export function Status({
    age,
    residence,
    discipline,
    experience,
}: StatusProps) {
    const locale = useLocale()
    
    return (
        <dl
            class={clsx(
                "flex flex-col space-y-screen-xs rounded-2xl bg-neutral-200 py-screen-xs dark:bg-neutral-800 sm:flex-row sm:justify-evenly sm:space-y-0",
                themeSwitchTransitionClasses,
            )}
        >
            <StatusItem title={{ da: "Alder", en: "Age" }[locale]} value={age}/>
            <StatusItem title={{ da: "Bopæl", en: "Residence" }[locale]} value={residence}/>
            <StatusItem title={{ da: "Faglig baggrund", en: "Academic Discipline" }[locale]} value={discipline}/>
            <StatusItem title={{ da: "Joberfaring", en: "Work Experience" }[locale]} value={experience}/>
        </dl>
    )
}

type StatusItemProps = {
    readonly title: string
    readonly value: string
}

function StatusItem({
    title,
    value,
}: StatusItemProps) {
    return (
        <div class="whitespace-nowrap text-center">
            <dt>{title}</dt>
            <dd
                class={clsx(
                    "font-bold md:text-xl lg:text-2xl",
                    responsiveTextSizeTransitionClasses,
                )}
            >
                {value}
            </dd>
        </div>
    )
}
