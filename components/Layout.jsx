import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>colornames feed</title>
            </Head>
    <main id="main">{children}</main>
        </div>
    )
}