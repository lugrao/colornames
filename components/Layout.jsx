import Head from "next/head"

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>cien colores nombrados</title>
        <meta property="og:title" content="cien colores random" key="title" />
        <meta
          name="description"
          content="cien colores random nombrados por cien personas random"
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/b/b4/Seven-colors_%28visible_spectrum%29_vector.svg"
        />
        <meta
          property="og:image:secure_url"
          content="https://upload.wikimedia.org/wikipedia/commons/b/b4/Seven-colors_%28visible_spectrum%29_vector.svg"
        />
        <link rel="icon" href="/rueda-de-colores.svg" />
      </Head>
      <main id="main">{children}</main>
    </div>
  )
}
