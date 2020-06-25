import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>colornames feed</title>
        <meta property="og:title" content="cien colores random" key="title" />
        <meta name="description" content="cien colores random nombrados por cien personas random" />
        <link rel="icon" href="/rueda-de-colores.svg" />
      </Head>
      <main id="main">{children}</main>
    </div>
  );
}
