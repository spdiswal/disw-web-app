type GreetingProps = Readonly<{
    name: string
}>

export function Greeting({ name }: GreetingProps) {
    return (
        <main class="font-black pt-12 text-2xl text-amber-500 text-center / md:text-3xl / lg:text-4xl / xl:text-5xl">
            <p>Hi there, {name}!</p>
            <p class="text-white">Let&apos;s go!!</p>
        </main>
    )
}
