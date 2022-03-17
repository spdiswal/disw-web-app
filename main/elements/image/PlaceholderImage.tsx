import clsx from "clsx"

type PlaceholderImageProps = {
    readonly class?: string
    readonly asset: string
}

export function PlaceholderImage({
    class: _class,
    asset,
}: PlaceholderImageProps) {
    return (
        <img
            class={clsx(_class, "object-cover object-center blur-xl")}
            src={asset}
            alt=""
            draggable={false}
        />
    )
}
