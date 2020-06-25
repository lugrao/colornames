import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>colornames feed</title>
        <meta property="og:title" content="colornames feed" key="title" />
        <link rel="icon" href="/rueda-de-colores.svg" />
      </Head>
      <main id="main">{children}</main>
    </div>
  );
}
