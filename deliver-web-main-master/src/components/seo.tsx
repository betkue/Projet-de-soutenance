import Head from "next/head"

interface Props {
    title: string,
    descriptiom: string
}

export const Seo = ({ title, descriptiom }: Props) => {
    return (
        <Head>
            <title>
                {title}
            </title>
            <meta
                name={descriptiom}
                content="Generarw"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Head>
    )
}